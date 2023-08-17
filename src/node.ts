// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as cdk from 'aws-cdk-lib';
import * as managedblockchain from 'aws-cdk-lib/aws-managedblockchain';
import * as constructs from 'constructs';

import * as utilities from './utilities';

/**
 * Supported instance types for Managed Blockchain nodes
 */
export enum InstanceType {
  BURSTABLE3_LARGE = 'bc.t3.large',
  BURSTABLE3_XLARGE = 'bc.t3.xlarge',
  STANDARD5_LARGE = 'bc.m5.large',
  STANDARD5_XLARGE = 'bc.m5.xlarge',
  STANDARD5_XLARGE2 = 'bc.m5.2xlarge',
  STANDARD5_XLARGE4 = 'bc.m5.4xlarge',
  COMPUTE5_XLARGE = 'bc.c5.xlarge',
  COMPUTE5_XLARGE2 = 'bc.c5.2xlarge',
  COMPUTE5_XLARGE4 = 'bc.c5.4xlarge',
}

/**
 * Supported Ethereum networks for Managed Blockchain nodes
 */
export enum Network {
  MAINNET = 'n-ethereum-mainnet',
  GOERLI = 'n-ethereum-goerli',
  RINKEBY = 'n-ethereum-rinkeby',
  ROPSTEN = 'n-ethereum-ropsten',
}

/**
 * Construct properties for `EthereumNode`
 */
export interface EthereumNodeProps {

  /**
     * The Ethereum Network in which the node will be created
     * @default - The default network selected is Mainnet network
     */
  readonly network?: Network;

  /**
     * The Amazon Managed Blockchain instance type for the Ethereum node
     * @default - BURSTABLE3_LARGE
     */
  readonly instanceType?: InstanceType;

  /**
     * The Availability Zone in which the node will be created
     * @default - us-east-1a
     */
  readonly availabilityZone?: string;

}


export class EthereumNode extends constructs.Construct {

  /**
     * Managed Blockchain Ethereum network identifier
     */
  readonly network: Network;

  /**
     * The Amazon Managed Blockchain instance type for the node
     */
  readonly instanceType: InstanceType;

  /**
   * The Region in which the node exists
   */
  readonly region: string;

  /**
     * The Availability Zone in which the node exists
     */
  readonly availabilityZone: string;

  /**
   * The ID of the node
   */
  readonly nodeId: string;

  /**
   * The node's HTTP endpoint
   */
  readonly httpEndpoint: string;

  /**
   * The node's Web Socket endpoint
   */
  readonly webSocketEndpoint: string;

  /**
   * Creates an Ethereum public network node on an Amazon Managed Blockchain network
  */
  constructor(scope: constructs.Construct, id: string, props?: EthereumNodeProps) {

    super(scope, id);

    const region = cdk.Stack.of(this).region;
    const availabilityZones = cdk.Stack.of(this).availabilityZones;
    var regionInEnvironment = !cdk.Token.isUnresolved(region);

    /**
     * Builds out Ethereum node given a list of input property objects,
     * using defaults if values not provided; additionally checks to ensure node deployment
     * is supported given region and availability zone
     */
    if (typeof props === 'undefined') props = {};
    // If no node configurations are provided, create one; the empty object
    // will be populated with defaults when passed to the node constructor
    this.network = props.network ?? Network.MAINNET;
    this.instanceType = props.instanceType ?? InstanceType.BURSTABLE3_LARGE;
    this.region = region;

    // If no availability zone is provided, use the first in the region.
    if (regionInEnvironment) {
      utilities.validateRegion(region);
      this.availabilityZone = props.availabilityZone ?? `${region}a`;
      utilities.validateAvailabilityZone(region, this.availabilityZone);
    } else {
      this.availabilityZone = props.availabilityZone ?? availabilityZones[0];
    }

    /**
     * Build out CloudFormation resources populating with input values or defaults if none provided
     */
    const cfnNode = new managedblockchain.CfnNode(this, id, {
      networkId: this.network,
      nodeConfiguration: {
        availabilityZone: this.availabilityZone,
        instanceType: this.instanceType,
      },
    });

    /**
     * Set class properties using CfnNode
     */

    // Node ID

    this.nodeId = cfnNode.attrNodeId;

    // Node Endpoints

    const httpEndpointPrefix = 'https://';
    const webSocketEndpointPrefix = 'wss://';
    const endpointSuffix = `.ethereum.managedblockchain.${this.region}.amazon.aws.com`;

    this.httpEndpoint = `${httpEndpointPrefix}${this.nodeId}${endpointSuffix}`;
    this.webSocketEndpoint = `${webSocketEndpointPrefix}${this.nodeId}.wss${endpointSuffix}`;
  }
}

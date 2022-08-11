// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as cdk from 'aws-cdk-lib';
import * as managedblockchain from 'aws-cdk-lib/aws-managedblockchain';
import { Construct } from 'constructs';
import * as utilities from './utilities';

/**
 * Construct properties for `EthereumNode`
 */

export interface EthereumNodeProps {

  /**
     * The Ethereum Network in which the node will be created
     * @default - The default network selected is ROPSTEN test network
     */
  readonly networkId?: string;

  /**
     * The Amazon Managed Blockchain instance type for the Ethereum node
     * @default - BURSTABLE3_LARGE
     */
  readonly instanceType?: string;

  /**
     * The Availability Zone in which the node will be created
     * @default - us-east-1a
     */
  readonly availabilityZone?: string;

}


export class EthereumNodeNetwork extends Construct {

  /**
     * Managed Blockchain Ethereum network identifier
     */
  readonly networkId: string;

  /**
     * The Amazon Managed Blockchain instance type for the node
     */
  readonly instanceType: string;

  /**
     * The Availability Zone in which the node exists
     */
  readonly availabilityZone: string;

  /**
   * Creates an Ethereum public network node on an Amazon Managed Blockchain network
  */
  constructor(scope: Construct, id: string, props?: EthereumNodeProps) {

    super(scope, id);

    const region = cdk.Stack.of(this).region;

    /**
     * Builds out Ethereum node given a list of input property objects,
     * using defaults if values not provided; additionally checks to ensure node deployment
     * is supported given region and availability zone
     */
    if (typeof props === 'undefined') props = {};
    // If no node configurations are provided, create one; the empty object
    // will be populated with defaults when passed to the node constructor
    this.networkId = props.networkId ?? utilities.NetworkId.ROPSTEN;
    this.instanceType = props.instanceType ?? utilities.InstanceType.BURSTABLE3_LARGE;
    this.availabilityZone = props.availabilityZone ?? `${region}a`;

    utilities.validateRegion(region);
    utilities.validateAvailabilityZone(region, this.availabilityZone);
    utilities.validateInstanceType(this.instanceType);

    /**
     * Build out CloudFormation resources populating with input values or defaults if none provided
     */
    new managedblockchain.CfnNode(this, id, {
      networkId: this.networkId,
      nodeConfiguration: {
        availabilityZone: this.availabilityZone,
        instanceType: this.instanceType,
      },
    });

  }

}
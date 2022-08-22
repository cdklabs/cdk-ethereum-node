// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as cdk from 'aws-cdk-lib';
import * as assertions from 'aws-cdk-lib/assertions';
import * as ethereum from '../src/node';
import * as utilities from '../src/utilities';

const DEFAULT_ENV = { env: { region: 'us-east-1' } };

describe('ethereum-node', () => {
  /**
   * A test that validates that the CDK construct deploys an
   * Ethereum node with default configuration.
   */
  test('Create a network with the default node configuration', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
    const network = new ethereum.EthereumNode(stack, 'TestEthereumPublicNetwork', {});
    const template = assertions.Template.fromStack(stack);
    template.resourceCountIs('AWS::ManagedBlockchain::Node', 1);
    template.hasResource('AWS::ManagedBlockchain::Node', {
      Properties: {
        NodeConfiguration: {
          AvailabilityZone: 'us-east-1a',
          InstanceType: 'bc.t3.large',
        },
      },
    });
    expect(network.networkId).toBe(utilities.NetworkId.ROPSTEN);
    expect(network.availabilityZone).toBe('us-east-1a');
    expect(network.instanceType).toBe(utilities.InstanceType.BURSTABLE3_LARGE);
  });

  /**
   * A test that validates that the CDK construct deploys an
   * Ethereum node with custom configuration.
   */
  test('Create a network with a custom node configuration', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
    const network = new ethereum.EthereumNode(stack, 'TestEthereumPublicNetwork', {
      networkId: utilities.NetworkId.MAINNET,
      availabilityZone: 'us-east-1b',
      instanceType: utilities.InstanceType.BURSTABLE3_LARGE,
    });
    const template = assertions.Template.fromStack(stack);
    template.resourceCountIs('AWS::ManagedBlockchain::Node', 1);
    template.hasResource('AWS::ManagedBlockchain::Node', {
      Properties: {
        NodeConfiguration: {
          AvailabilityZone: 'us-east-1b',
          InstanceType: 'bc.t3.large',
        },
      },
    });
    expect(network.networkId).toBe(utilities.NetworkId.MAINNET);
    expect(network.availabilityZone).toBe('us-east-1b');
    expect(network.instanceType).toBe(utilities.InstanceType.BURSTABLE3_LARGE);
  });

  /**
   * A test that validates that the CDK construct fails to deploy
   * an Ethereum node with an invalid availability zone.
   */
  test('Fail to create a node on network with an invalid availability zone', () => {
    expect(utilities.SUPPORTED_AVAILABILITY_ZONES).not.toContain('us-west-1a');
    const mismatchedAvailabilityZone = () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
      new ethereum.EthereumNode(stack, 'TestEthereumNode', { availabilityZone: 'us-west-1a' });
    };
    expect(utilities.SUPPORTED_AVAILABILITY_ZONES['us-east-1']).not.toContain('us-east-1z');
    const nonexistantAvailabilityZone = () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
      new ethereum.EthereumNode(stack, 'TestEthereumNode', { availabilityZone: 'us-east-1z' });
    };
    expect(mismatchedAvailabilityZone).toThrow(Error);
    expect(nonexistantAvailabilityZone).toThrow(Error);
  });

  /**
   * A test that validates that the CDK construct fails to deploy
   * an Ethereum node with an invalid instance type.
   */
  test('Fail to create a node on network with an unsupported instance type', () => {
    expect(utilities.InstanceType).not.toContain('bc.t3.2xlarge');
    const unsupportedInstanceType = () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
      new ethereum.EthereumNode(stack, 'TestEthereumNode', { instanceType: 'bc.t3.2xlarge' });
    };
    expect(unsupportedInstanceType).toThrow(Error);
  });

  /**
   * A test that throws an error when construct given an
   * unsupported region.
   */
  test('Fail to create a node on network with an unsupported region', () => {
    expect(utilities.SUPPORTED_REGIONS).not.toContain('us-west-1');
    const unsupportedRegion = () => {
      const app = new cdk.App();
      const unsupported_region = { env: { region: 'us-west-1' } };
      const stack = new cdk.Stack(app, 'TestStack', unsupported_region);
      new ethereum.EthereumNode(stack, 'TestEthereumNode');
    };
    expect(unsupportedRegion).toThrow(Error);
  });
});
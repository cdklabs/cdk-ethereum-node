// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import * as cdk from 'aws-cdk-lib';
import * as assertions from 'aws-cdk-lib/assertions';

import * as ethereum from '../src';

const DEFAULT_ENV = { env: { region: 'us-east-1' } };

describe('EthereumNode', () => {

  test('Create an Ethereum node with the default configuration', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
    const node = new ethereum.EthereumNode(stack, 'TestEthereumPublicNetwork', {});
    const template = assertions.Template.fromStack(stack);
    template.resourceCountIs('AWS::ManagedBlockchain::Node', 1);
    template.hasResource('AWS::ManagedBlockchain::Node', {
      Properties: {
        NodeConfiguration: {
          AvailabilityZone: 'us-east-1a',
          InstanceType: 'bc.t3.xlarge',
        },
      },
    });
    expect(node.network).toBe(ethereum.Network.MAINNET);
    expect(node.availabilityZone).toBe('us-east-1a');
    expect(node.instanceType).toBe(ethereum.InstanceType.BURSTABLE3_XLARGE);
  });

  test('Create an Ethereum node with a custom configuration', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
    const node = new ethereum.EthereumNode(stack, 'TestEthereumPublicNetwork', {
      network: ethereum.Network.MAINNET,
      availabilityZone: 'us-east-1b',
      instanceType: ethereum.InstanceType.BURSTABLE3_XLARGE,
    });
    const template = assertions.Template.fromStack(stack);
    template.resourceCountIs('AWS::ManagedBlockchain::Node', 1);
    template.hasResource('AWS::ManagedBlockchain::Node', {
      Properties: {
        NodeConfiguration: {
          AvailabilityZone: 'us-east-1b',
          InstanceType: 'bc.t3.xlarge',
        },
      },
    });
    expect(node.network).toBe(ethereum.Network.MAINNET);
    expect(node.availabilityZone).toBe('us-east-1b');
    expect(node.instanceType).toBe(ethereum.InstanceType.BURSTABLE3_XLARGE);
  });

  test('Fail to create a node in an invalid availability zone', () => {
    expect(ethereum.SUPPORTED_AVAILABILITY_ZONES).not.toContain('us-west-1a');
    const mismatchedAvailabilityZone = () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
      new ethereum.EthereumNode(stack, 'TestEthereumNode', { availabilityZone: 'us-west-1a' });
    };
    expect(ethereum.SUPPORTED_AVAILABILITY_ZONES['us-east-1']).not.toContain('us-east-1z');
    const nonexistantAvailabilityZone = () => {
      const app = new cdk.App();
      const stack = new cdk.Stack(app, 'TestStack', DEFAULT_ENV);
      new ethereum.EthereumNode(stack, 'TestEthereumNode', { availabilityZone: 'us-east-1z' });
    };
    expect(mismatchedAvailabilityZone).toThrow(Error);
    expect(nonexistantAvailabilityZone).toThrow(Error);
  });

  test('Fail to create a node in an unsupported region', () => {
    expect(ethereum.SUPPORTED_REGIONS).not.toContain('us-west-1');
    const unsupportedRegion = () => {
      const app = new cdk.App();
      const unsupported_region = { env: { region: 'us-west-1' } };
      const stack = new cdk.Stack(app, 'TestStack', unsupported_region);
      new ethereum.EthereumNode(stack, 'TestEthereumNode');
    };
    expect(unsupportedRegion).toThrow(Error);
  });

});

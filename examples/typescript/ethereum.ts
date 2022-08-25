// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Network, InstanceType, EthereumNode } from '../../src/node'

export class EthereumCdkStack extends Stack {
  constructor (scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

        /**
         * Default Ethereum node deployment onto Amazon Managed Blockchain
         * Network - Ethereum Mainnet
         * Availability Zone - 'us-east-1a'
         * Instance Type - 'bc.t3.large'
         */
        new EthereumNode(this, 'EthereumDefault')

    /**
     * Custom network configurations for Ethereum node delpoyments
     */
    new EthereumNode(this, 'EthereumCustom', {
      network: Network.ROPSTEN,
      availabilityZone: 'us-east-1b',
      instanceType: InstanceType.BURSTABLE3_LARGE
        })
  }
}
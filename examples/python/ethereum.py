# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

import os
import aws_cdk as cdk
import cdk_ethereum_node as ethereum

class EthereumCdkStack(cdk.Stack):
    def __init__(self, scope, id, **kwargs):
        super().__init__(scope, id, **kwargs)

        # Default Ethereum node deployment onto Amazon Managed Blockchain
        # Network - Ethereum Mainnet
        # Availability Zone - 'us-east-1a'
        # Instance Type - 'bc.t3.large'

        ethereum_node = ethereum.EthereumNode(self, "MyDefaultEthereumNode")

        # Custom network configurations for Ethereum node delpoyments
        
        custom_ethereum_node = ethereum.EthereumNode(self, "MyCustomEthereumNode",
            network = ethereum.Network.ROPSTEN,
            availability_zone = 'us-east-1a',
            instance_type = ethereum.InstanceType.BURSTABLE3_XLARGE
        );

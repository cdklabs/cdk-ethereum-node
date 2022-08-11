
<!-- TODO: FINALIZE README BEFORE JUD REVIEW-->
<!-- TODO: CREATE SEPARATE READMES FOR CLASSES-->
# Ethereum Network on Amazon Managed Blockchain

This repository contains an L2 CDK construct to deploy an Ethereum 
network running on Amazon Managed Blockchain. It currently builds
out one node on the Ethereum Ropsten testnet, but the following enhanced functionality
is planned for future releases:

*  Support for other languages (e.g. Python)

> Note that this construct requires [AWS CDK v2](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install).

## Installation

The construct is available for both TypeScript and Python CDK projects.
It can be installed with the following:

<!-- TODO: COME BACK TO CHANGE NAME -->
*  TypeScript: `npm install --save cdk-ethereum`
*  Python: `pip3 install cdk-ethereum`




## Usage

A minimally complete deployment is shown below. By default, a standard network
will be created running Ethereum Ropsten testnet with a single `bc.t3.large` node.

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { EthereumNodeNetwork } from './ethereum-node';

export class EthereumCdkStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        /**
         * Default Ethereum node deployment onto Amazon Managed Blockchain
         * Network - Ethereum Ropsten
         * Availability Zone - 'us-east-1a'
         * Instance Type - 'bc.t3.large'
         */
        new EthereumNodeNetwork(this, 'EthereumDefault');
    }
}

```

The following is a more complex instantiation illustrating some of the options available.

```typescript
new EthereumNodeNetwork(this, 'EthereumCustom', {
            networkId: NetworkId.MAINNET,
            availabilityZone: 'us-east-1b',
            instanceType: InstanceType.BURSTABLE3_LARGE,
        });
```

<!-- See the [API Documentation](API.md) for details on all available input and output parameters. -->


## References

*  [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
*  [Amazon Managed Blockchain](https://aws.amazon.com/managed-blockchain/)
*  [Amazon Managed Blockchain Ethereum Nodes](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/ethereum-nodes.html)
*  [Ethereum Documentation](https://ethereum.org/en/developers/docs/)
*  [AWS CloudFormation Node Configuration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-node-nodeconfiguration.html)
*  [AWS CloudFormation Node Configuration Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#aws-resource-managedblockchain-node--examples)


## Contributing

Pull requests are welcomed. Please review the [Contributing Guidelines](CONTRIBUTING.md)
and the [Code of Conduct](CODE_OF_CONDUCT.md).


## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.


## Authors

*  Marc Gozali (gozalim@amazon.com)
*  Trinity Key (trinikey@amazon.com)
*  Jud Neer (judneer@amazon.com)
<!-- Special Shoutout to Roger Ramesh (rameroge@) and Evan Harrington (evharrin@)  -->


<!-- TODO: FIX -->
## License
This project is licensed under the MIT-0 License. See the [LICENSE](LICENSE) file for details.


<!-- TODO: FINALIZE README BEFORE JUD REVIEW-->
<!-- TODO: CREATE SEPARATE READMES FOR CLASSES-->
# Ethereum Nodes on Amazon Managed Blockchain

This repository contains an L2 CDK construct to deploy an Ethereum 
node running on Amazon Managed Blockchain. The default configuration currently builds
out one node on the Ethereum Ropsten testnet but provides configuration options to deploy nodes to the Mainnet, Goerli, and Rinkeby testnets. The following enhanced functionality
is planned for future releases:

*  Support for other languages (e.g. Python)


## Installation
> Note that this construct requires [AWS CDK v2](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install).

The construct is available for both TypeScript and Python CDK projects.
It can be installed with the following:

<!-- TODO: COME BACK TO CHANGE NAME -->
#### JavaScript

```bash
npm install --save @cdklabs/cdk-ethereum-node
```

#### Python

```bash
pip3 install cdklabs.cdk-ethereum-node
```

#### Java

Add the following to `pom.xml`:

```xml
<dependency>
  <groupId>io.github.cdklabs</groupId>
  <artifactId>cdk-ethereum-node</artifactId>
</dependency>
```

#### .NET

```bash
dotnet add package Cdklabs.CdkEthereumNode
```

## Usage

A minimally complete deployment is shown below. By default, Amazon Managed Blockchain deploys a single `bc.t3.large` node on the Ethereum Ropsten testnet. 

```typescript
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EthereumNode } from '../src/node';
import { NetworkId, InstanceType } from '../src/utilities' 

export class EthereumCdkStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        /**
         * Default Ethereum node deployment onto Amazon Managed Blockchain
         * Network - Ethereum Ropsten testnet
         * Availability Zone - 'us-east-1a'
         * Instance Type - 'bc.t3.large'
         */
        new EthereumNode(this, 'EthereumDefault');
    }
}

```

The equivalent Python code is as follows:

```python
import aws_cdk as cdk
import cdk_ethereum_node as ethereum

class EthereumCdkStack(cdk.Stack):
    def __init__(self, scope, id, **kwargs):
        super().__init__(scope, id, **kwargs)

        # Default Ethereum node deployment onto Amazon Managed Blockchain
        # Network - Ethereum Ropsten
        # Availability Zone - 'us-east-1a'
        # Instance Type - 'bc.t3.large'

        ethereum_node = ethereum.EthereumNode(self, "MyDefaultEthereumNode")
```

The following is a more complex instantiation illustrating some of the node configuration options available.

```typescript
new EthereumNode(this, 'EthereumCustom', {
        networkId: NetworkId.MAINNET,
        availabilityZone: 'us-east-1b',
        instanceType: InstanceType.BURSTABLE3_LARGE,
    });
```


The following provides an example of how to leverage the construct to deploy more than one node at a time.

```typescript
for (var i = 0; i < 10; i++) {
    new EthereumNodeNetwork(this, `EthereumCustom_${i}`, {
    networkId: NetworkId.MAINNET,
    availabilityZone: 'us-east-1b',
    instanceType: InstanceType.BURSTABLE3_LARGE
    })
}
```


See the [API Documentation](API.md) for details on all available input and output parameters.


## References

*  [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
*  [Amazon Managed Blockchain Ethereum Nodes](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/ethereum-nodes.html)
*  [Ethereum Documentation](https://ethereum.org/en/developers/docs/)
*  [AWS CloudFormation Node Configuration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-node-nodeconfiguration.html)


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

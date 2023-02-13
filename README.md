# Ethereum on Amazon Managed Blockchain

[![license](https://img.shields.io/github/license/cdklabs/cdk-ethereum-node?color=green)](https://opensource.org/licenses/MIT)
[![release](https://img.shields.io/github/v/release/cdklabs/cdk-ethereum-node?color=green)](https://github.com/cdklabs/cdk-ethereum-node/releases)
[![npm:version](https://img.shields.io/npm/v/@cdklabs/cdk-ethereum-node?color=blue)](https://www.npmjs.com/package/@cdklabs/cdk-ethereum-node)
[![PyPi:version](https://img.shields.io/pypi/v/cdklabs.cdk-ethereum-node?color=blue)](https://pypi.org/project/cdklabs.cdk-ethereum-node/)
[![Maven:version](https://img.shields.io/maven-central/v/io.github.cdklabs/cdk-ethereum-node?color=blue&label=maven)](https://central.sonatype.dev/artifact/io.github.cdklabs/cdk-ethereum-node/0.0.61)
[![NuGet:version](https://img.shields.io/nuget/v/Cdklabs.CdkEthereumNode?color=blue)](https://www.nuget.org/packages/Cdklabs.CdkEthereumNode)


This repository contains a CDK construct to deploy an Ethereum node running
on Amazon Managed Blockchain. The following networks are supported:

*  Mainnet (default)
*  Testnet: Goerli
*  Testnet: Rinkeby
*  Testnet: Ropsten



## Installation

Note that this construct requires [AWS CDK v2](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install).

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

A minimally complete deployment is shown below. By default,
a `bc.t3.large` node will be created on the Ethereum Mainnet.

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EthereumNode, Network, InstanceType } from '@cdklabs/cdk-ethereum-node';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new EthereumNode(this, 'Example');
  }
}

```

The equivalent Python code is as follows:

```python
from aws_cdk import Stack
from cdklabs.cdk_ethereum_node import EthereumNode

class MyStack(Stack):
    def __init__(self, scope, id, **kwargs):
        super().__init__(scope, id, **kwargs)
        EthereumNode(self, 'Example')
```

The following is a more complex instantiation illustrating some of the node configuration options available.

```typescript
new EthereumNode(this, 'Example', {
  network: Network.ROPSTEN,
  availabilityZone: 'us-east-1b',
  instanceType: InstanceType.BURSTABLE3_LARGE,
});
```

The following provides an example of how to leverage the construct to deploy more than one node at a time.

```typescript
for (const i = 0; i < 10; i++) {
  new EthereumNode(this, `Example_${i}`);
}
```

See the [API Documentation](API.md) for details on all available input and output parameters.


## References

*  [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
*  [Amazon Managed Blockchain](https://aws.amazon.com/managed-blockchain/)
*  [Ethereum](https://ethereum.org/en/developers/docs/)


## Contributing

Pull requests are welcomed. Please review the [Contributing Guidelines](CONTRIBUTING.md)
and the [Code of Conduct](CODE_OF_CONDUCT.md).


## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.


## Authors

*  Trinity Key (trinikey@amazon.com)
*  Marc Gozali (gozalim@amazon.com)


## License

This project is licensed under the MIT-0 License. See the [LICENSE](LICENSE) file for details.

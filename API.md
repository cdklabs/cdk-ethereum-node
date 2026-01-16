# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EthereumNode <a name="EthereumNode" id="@cdklabs/cdk-ethereum-node.EthereumNode"></a>

#### Initializers <a name="Initializers" id="@cdklabs/cdk-ethereum-node.EthereumNode.Initializer"></a>

```typescript
import { EthereumNode } from '@cdklabs/cdk-ethereum-node'

new EthereumNode(scope: Construct, id: string, props?: EthereumNodeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNodeProps">EthereumNodeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-ethereum-node.EthereumNode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-ethereum-node.EthereumNode.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-ethereum-node.EthereumNode.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-ethereum-node.EthereumNodeProps">EthereumNodeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-ethereum-node.EthereumNode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/cdk-ethereum-node.EthereumNode.isConstruct"></a>

```typescript
import { EthereumNode } from '@cdklabs/cdk-ethereum-node'

EthereumNode.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-ethereum-node.EthereumNode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone in which the node exists. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.property.instanceType">instanceType</a></code> | <code><a href="#@cdklabs/cdk-ethereum-node.InstanceType">InstanceType</a></code> | The Amazon Managed Blockchain instance type for the node. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.property.network">network</a></code> | <code><a href="#@cdklabs/cdk-ethereum-node.Network">Network</a></code> | Managed Blockchain Ethereum network identifier. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.property.region">region</a></code> | <code>string</code> | The Region in which the node exists. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-ethereum-node.EthereumNode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdklabs/cdk-ethereum-node.EthereumNode.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The Availability Zone in which the node exists.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdklabs/cdk-ethereum-node.EthereumNode.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* <a href="#@cdklabs/cdk-ethereum-node.InstanceType">InstanceType</a>

The Amazon Managed Blockchain instance type for the node.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdklabs/cdk-ethereum-node.EthereumNode.property.network"></a>

```typescript
public readonly network: Network;
```

- *Type:* <a href="#@cdklabs/cdk-ethereum-node.Network">Network</a>

Managed Blockchain Ethereum network identifier.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdklabs/cdk-ethereum-node.EthereumNode.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the node exists.

---


## Structs <a name="Structs" id="Structs"></a>

### EthereumNodeProps <a name="EthereumNodeProps" id="@cdklabs/cdk-ethereum-node.EthereumNodeProps"></a>

Construct properties for `EthereumNode`.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-ethereum-node.EthereumNodeProps.Initializer"></a>

```typescript
import { EthereumNodeProps } from '@cdklabs/cdk-ethereum-node'

const ethereumNodeProps: EthereumNodeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNodeProps.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone in which the node will be created. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNodeProps.property.instanceType">instanceType</a></code> | <code><a href="#@cdklabs/cdk-ethereum-node.InstanceType">InstanceType</a></code> | The Amazon Managed Blockchain instance type for the Ethereum node. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNodeProps.property.network">network</a></code> | <code><a href="#@cdklabs/cdk-ethereum-node.Network">Network</a></code> | The Ethereum Network in which the node will be created. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdklabs/cdk-ethereum-node.EthereumNodeProps.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string
- *Default:* us-east-1a

The Availability Zone in which the node will be created.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdklabs/cdk-ethereum-node.EthereumNodeProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* <a href="#@cdklabs/cdk-ethereum-node.InstanceType">InstanceType</a>
- *Default:* BURSTABLE3_LARGE

The Amazon Managed Blockchain instance type for the Ethereum node.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdklabs/cdk-ethereum-node.EthereumNodeProps.property.network"></a>

```typescript
public readonly network: Network;
```

- *Type:* <a href="#@cdklabs/cdk-ethereum-node.Network">Network</a>
- *Default:* The default network selected is Mainnet network

The Ethereum Network in which the node will be created.

---



## Enums <a name="Enums" id="Enums"></a>

### InstanceType <a name="InstanceType" id="@cdklabs/cdk-ethereum-node.InstanceType"></a>

Supported instance types for Managed Blockchain nodes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-ethereum-node.InstanceType.BURSTABLE3_XLARGE">BURSTABLE3_XLARGE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.InstanceType.STANDARD5_XLARGE">STANDARD5_XLARGE</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.InstanceType.STANDARD5_XLARGE2">STANDARD5_XLARGE2</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.InstanceType.STANDARD5_XLARGE4">STANDARD5_XLARGE4</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.InstanceType.COMPUTE5_XLARGE2">COMPUTE5_XLARGE2</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.InstanceType.COMPUTE5_XLARGE4">COMPUTE5_XLARGE4</a></code> | *No description.* |

---

##### `BURSTABLE3_XLARGE` <a name="BURSTABLE3_XLARGE" id="@cdklabs/cdk-ethereum-node.InstanceType.BURSTABLE3_XLARGE"></a>

---


##### `STANDARD5_XLARGE` <a name="STANDARD5_XLARGE" id="@cdklabs/cdk-ethereum-node.InstanceType.STANDARD5_XLARGE"></a>

---


##### `STANDARD5_XLARGE2` <a name="STANDARD5_XLARGE2" id="@cdklabs/cdk-ethereum-node.InstanceType.STANDARD5_XLARGE2"></a>

---


##### `STANDARD5_XLARGE4` <a name="STANDARD5_XLARGE4" id="@cdklabs/cdk-ethereum-node.InstanceType.STANDARD5_XLARGE4"></a>

---


##### `COMPUTE5_XLARGE2` <a name="COMPUTE5_XLARGE2" id="@cdklabs/cdk-ethereum-node.InstanceType.COMPUTE5_XLARGE2"></a>

---


##### `COMPUTE5_XLARGE4` <a name="COMPUTE5_XLARGE4" id="@cdklabs/cdk-ethereum-node.InstanceType.COMPUTE5_XLARGE4"></a>

---


### Network <a name="Network" id="@cdklabs/cdk-ethereum-node.Network"></a>

Supported Ethereum networks for Managed Blockchain nodes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-ethereum-node.Network.MAINNET">MAINNET</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.Network.GOERLI">GOERLI</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.Network.RINKEBY">RINKEBY</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-ethereum-node.Network.ROPSTEN">ROPSTEN</a></code> | *No description.* |

---

##### `MAINNET` <a name="MAINNET" id="@cdklabs/cdk-ethereum-node.Network.MAINNET"></a>

---


##### `GOERLI` <a name="GOERLI" id="@cdklabs/cdk-ethereum-node.Network.GOERLI"></a>

---


##### `RINKEBY` <a name="RINKEBY" id="@cdklabs/cdk-ethereum-node.Network.RINKEBY"></a>

---


##### `ROPSTEN` <a name="ROPSTEN" id="@cdklabs/cdk-ethereum-node.Network.ROPSTEN"></a>

---


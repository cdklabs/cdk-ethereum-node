# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EthereumNodeNetwork <a name="EthereumNodeNetwork" id="cdk-ethereum-network.EthereumNodeNetwork"></a>

#### Initializers <a name="Initializers" id="cdk-ethereum-network.EthereumNodeNetwork.Initializer"></a>

```typescript
import { EthereumNodeNetwork } from 'cdk-ethereum-network'

new EthereumNodeNetwork(scope: Construct, id: string, props?: EthereumNodeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ethereum-network.EthereumNodeNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ethereum-network.EthereumNodeNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ethereum-network.EthereumNodeNetwork.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ethereum-network.EthereumNodeProps">EthereumNodeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ethereum-network.EthereumNodeNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ethereum-network.EthereumNodeNetwork.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-ethereum-network.EthereumNodeNetwork.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ethereum-network.EthereumNodeProps">EthereumNodeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ethereum-network.EthereumNodeNetwork.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ethereum-network.EthereumNodeNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ethereum-network.EthereumNodeNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ethereum-network.EthereumNodeNetwork.isConstruct"></a>

```typescript
import { EthereumNodeNetwork } from 'cdk-ethereum-network'

EthereumNodeNetwork.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ethereum-network.EthereumNodeNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ethereum-network.EthereumNodeNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ethereum-network.EthereumNodeNetwork.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone in which the node exists. |
| <code><a href="#cdk-ethereum-network.EthereumNodeNetwork.property.instanceType">instanceType</a></code> | <code>string</code> | The Amazon Managed Blockchain instance type for the node. |
| <code><a href="#cdk-ethereum-network.EthereumNodeNetwork.property.networkId">networkId</a></code> | <code>string</code> | Managed Blockchain Ethereum network identifier. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ethereum-network.EthereumNodeNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="cdk-ethereum-network.EthereumNodeNetwork.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The Availability Zone in which the node exists.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="cdk-ethereum-network.EthereumNodeNetwork.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The Amazon Managed Blockchain instance type for the node.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="cdk-ethereum-network.EthereumNodeNetwork.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Managed Blockchain Ethereum network identifier.

---


## Structs <a name="Structs" id="Structs"></a>

### EthereumNodeProps <a name="EthereumNodeProps" id="cdk-ethereum-network.EthereumNodeProps"></a>

Construct properties for `EthereumNode`.

#### Initializer <a name="Initializer" id="cdk-ethereum-network.EthereumNodeProps.Initializer"></a>

```typescript
import { EthereumNodeProps } from 'cdk-ethereum-network'

const ethereumNodeProps: EthereumNodeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ethereum-network.EthereumNodeProps.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone in which the node will be created. |
| <code><a href="#cdk-ethereum-network.EthereumNodeProps.property.instanceType">instanceType</a></code> | <code>string</code> | The Amazon Managed Blockchain instance type for the Ethereum node. |
| <code><a href="#cdk-ethereum-network.EthereumNodeProps.property.networkId">networkId</a></code> | <code>string</code> | The Ethereum Network in which the node will be created. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="cdk-ethereum-network.EthereumNodeProps.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string
- *Default:* us-east-1a

The Availability Zone in which the node will be created.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="cdk-ethereum-network.EthereumNodeProps.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string
- *Default:* BURSTABLE3_LARGE

The Amazon Managed Blockchain instance type for the Ethereum node.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="cdk-ethereum-network.EthereumNodeProps.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string
- *Default:* The default network selected is ROPSTEN test network

The Ethereum Network in which the node will be created.

---




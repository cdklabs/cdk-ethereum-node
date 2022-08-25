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

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-ethereum-node.EthereumNode.isConstruct"></a>

```typescript
import { EthereumNode } from '@cdklabs/cdk-ethereum-node'

EthereumNode.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-ethereum-node.EthereumNode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone in which the node exists. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.property.instanceType">instanceType</a></code> | <code>string</code> | The Amazon Managed Blockchain instance type for the node. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNode.property.networkId">networkId</a></code> | <code>string</code> | Managed Blockchain Ethereum network identifier. |

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
public readonly instanceType: string;
```

- *Type:* string

The Amazon Managed Blockchain instance type for the node.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdklabs/cdk-ethereum-node.EthereumNode.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Managed Blockchain Ethereum network identifier.

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
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNodeProps.property.instanceType">instanceType</a></code> | <code>string</code> | The Amazon Managed Blockchain instance type for the Ethereum node. |
| <code><a href="#@cdklabs/cdk-ethereum-node.EthereumNodeProps.property.networkId">networkId</a></code> | <code>string</code> | The Ethereum Network in which the node will be created. |

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
public readonly instanceType: string;
```

- *Type:* string
- *Default:* BURSTABLE3_LARGE

The Amazon Managed Blockchain instance type for the Ethereum node.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@cdklabs/cdk-ethereum-node.EthereumNodeProps.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string
- *Default:* The default network selected is Mainnet network

The Ethereum Network in which the node will be created.

---




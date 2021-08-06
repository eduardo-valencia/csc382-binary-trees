<a name="BinarySearchTree"></a>

## BinarySearchTree
The Binary Search Tree Class

**Kind**: global class  

* [BinarySearchTree](#BinarySearchTree)
    * [new BinarySearchTree(head)](#new_BinarySearchTree_new)
    * [.minimum](#BinarySearchTree+minimum) ⇒ <code>DataNode.&lt;Data&gt;</code> \| <code>null</code>
    * [.maximum](#BinarySearchTree+maximum) ⇒ <code>DataNode.&lt;Data&gt;</code> \| <code>null</code>
    * [.head](#BinarySearchTree+head)
    * [.head](#BinarySearchTree+head)
    * [.getIfShouldInsertOnSide(node, data, side)](#BinarySearchTree+getIfShouldInsertOnSide) ⇒ <code>boolean</code>
    * [.tryInsertingNodeOnSide(node, side, data)](#BinarySearchTree+tryInsertingNodeOnSide)
    * [.insert(data, startNode)](#BinarySearchTree+insert)
    * [.replaceWithNode(nodeToReplace, node)](#BinarySearchTree+replaceWithNode)
    * [.getSideTraverser(side)](#BinarySearchTree+getSideTraverser) ⇒ <code>function</code>
    * [.getMaximumValue()](#BinarySearchTree+getMaximumValue) ⇒ <code>Data</code> \| <code>null</code>
    * [.replaceNodeWithMinimumOfRightTree(nodeToDelete)](#BinarySearchTree+replaceNodeWithMinimumOfRightTree)
    * [.replaceNodeWithChild(nodeToDelete)](#BinarySearchTree+replaceNodeWithChild)
    * [.findParentNode(data, node)](#BinarySearchTree+findParentNode)
    * [.removeNodeFromParent(nodeToDelete)](#BinarySearchTree+removeNodeFromParent)
    * [.deleteNode(nodeToDelete)](#BinarySearchTree+deleteNode)
    * [.traverse(startNode)](#BinarySearchTree+traverse) ⇒ <code>IterableIterator.&lt;Data&gt;</code>

<a name="new_BinarySearchTree_new"></a>

### new BinarySearchTree(head)

| Param | Type | Description |
| --- | --- | --- |
| head | <code>Data</code> | Generic type describing the type of DataNode |

**Example**  
```js
new BinarySearchTree<number>()
```
<a name="BinarySearchTree+minimum"></a>

### binarySearchTree.minimum ⇒ <code>DataNode.&lt;Data&gt;</code> \| <code>null</code>
Gets the minimum node of a tree.

**Kind**: instance property of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>DataNode.&lt;Data&gt;</code> \| <code>null</code> - : Returns the minimum node or null  

| Param | Type | Description |
| --- | --- | --- |
|  | <code>node</code> | The node to start traversing from |

**Example**  
```js
tree.minimum()
```
<a name="BinarySearchTree+maximum"></a>

### binarySearchTree.maximum ⇒ <code>DataNode.&lt;Data&gt;</code> \| <code>null</code>
Gets the maximum node of a tree.

**Kind**: instance property of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>DataNode.&lt;Data&gt;</code> \| <code>null</code> - : Returns the maximum node or null  

| Param | Type | Description |
| --- | --- | --- |
|  | <code>node</code> | The node to start traversing from |

**Example**  
```js
tree.maximum()
```
<a name="BinarySearchTree+head"></a>

### binarySearchTree.head
**Kind**: instance property of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Example**  
```js
tree.head
```
<a name="BinarySearchTree+head"></a>

### binarySearchTree.head
**Kind**: instance property of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Example**  
```js
tree.head = null
```
<a name="BinarySearchTree+getIfShouldInsertOnSide"></a>

### binarySearchTree.getIfShouldInsertOnSide(node, data, side) ⇒ <code>boolean</code>
Returns whether it should insert on a side depending on the node's value

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>node</code> | The node to insert on |
| data | <code>data</code> | The data to insert |
| side | <code>side</code> | "left" or "right" |

**Example**  
```js
this.getIfShouldInsertOnSide(
            node,
            data,
            side
          )
```
<a name="BinarySearchTree+tryInsertingNodeOnSide"></a>

### binarySearchTree.tryInsertingNodeOnSide(node, side, data)
Gets whether a node should be inserted on a side, then tries to insert it.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>node</code> | The node to insert on |
| side | <code>data</code> | The data to insert |
| data | <code>side</code> | "left" or "right" |

**Example**  
```js
this.tryInsertingNodeOnSide(startNode, 'left', data)
```
<a name="BinarySearchTree+insert"></a>

### binarySearchTree.insert(data, startNode)
Creates a new node with data and inserts it into the tree.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>data</code> | The data to insert |
| startNode | <code>startNode</code> | The node to start the insertion process on |

**Example**  
```js
tree.insert(100)
```
<a name="BinarySearchTree+replaceWithNode"></a>

### binarySearchTree.replaceWithNode(nodeToReplace, node)
Replaces a node

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| nodeToReplace | <code>nodeToReplace</code> | The node to replace |
| node | <code>node</code> | The node to replace with |

**Example**  
```js
tree.insert(100)
tree.insert(99)
tree.replaceWithNode(tree.head, tree.head.left)
```
<a name="BinarySearchTree+getSideTraverser"></a>

### binarySearchTree.getSideTraverser(side) ⇒ <code>function</code>
Gets a function that traverses the tree in a given direction.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>function</code> - - a traverser function  

| Param | Type | Description |
| --- | --- | --- |
| side | <code>side</code> | Either "left" or "right" |

**Example**  
```js
tree.getSideTraverser('left')
```
<a name="BinarySearchTree+getMaximumValue"></a>

### binarySearchTree.getMaximumValue() ⇒ <code>Data</code> \| <code>null</code>
Gets the maximum value of a tree.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>Data</code> \| <code>null</code> - : Returns the maximum value or null  
**Example**  
```js
tree.getMaximumValue()
```
<a name="BinarySearchTree+replaceNodeWithMinimumOfRightTree"></a>

### binarySearchTree.replaceNodeWithMinimumOfRightTree(nodeToDelete)
Replaces the node that will be deleted with the minimum of the right side.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| nodeToDelete | <code>nodeToDelete</code> | The node to delete |

**Example**  
```js
tree.replaceNodeWithMinimumOfRightTree(tree.head)
```
<a name="BinarySearchTree+replaceNodeWithChild"></a>

### binarySearchTree.replaceNodeWithChild(nodeToDelete)
Replaces a node with either its left or right child, depending on which one exists.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| nodeToDelete | <code>nodeToDelete</code> | The node to delete |

**Example**  
```js
tree.replaceNodeWithChild(tree.head)
```
<a name="BinarySearchTree+findParentNode"></a>

### binarySearchTree.findParentNode(data, node)
Finds the parent node of a node with specific data

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>data</code> | The data to find |
| node | <code>node</code> | The node to begin traversing from |

**Example**  
```js
tree.insert(90)
tree.insert(100)
// Returns the head node (the one with 90)
tree.findParentNode(100)
```
<a name="BinarySearchTree+removeNodeFromParent"></a>

### binarySearchTree.removeNodeFromParent(nodeToDelete)
Finds the parent node and removes its reference to a specific child

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| nodeToDelete | <code>nodeToDelete</code> | The node to delete |

**Example**  
```js
tree.insert(100)
tree.insert(90)
tree.removeNodeFromParent(tree.head.left)
```
<a name="BinarySearchTree+deleteNode"></a>

### binarySearchTree.deleteNode(nodeToDelete)
Deletes a node, replacing it if necessary.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| nodeToDelete | <code>nodeToDelete</code> | The node to delete |

**Example**  
```js
tree.insert(100)
tree.deleteNode(tree.head)
```
<a name="BinarySearchTree+traverse"></a>

### binarySearchTree.traverse(startNode) ⇒ <code>IterableIterator.&lt;Data&gt;</code>
A generator method to traverse the tree. Yields the data, then left, then right.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>IterableIterator.&lt;Data&gt;</code> - : An iterator with the node data  

| Param | Type | Description |
| --- | --- | --- |
| startNode | <code>startNode</code> | The node to start traversing from |

**Example**  
```js
const generator = tree.traverse()
const { value } = generator.next()
```

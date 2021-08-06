# Binary Search Trees

## Introduction

Binary search trees are data structures that store nested nodes. Each node stores data and can have up to two nested nodes: a left child node and a right child node. Additionally, binary search trees are sorted, meaning that the left child node is always less than the right child node. Binary search trees have the following operations: insert, delete, maximum, and traverse. First, the insertion operation creates a new node using specific data. Second, the deletion operation deletes a specific node, replacing it if necessary. Third, the maximum operation finds the maximum value in the tree. Finally, the traverse operation helps you traverse the tree's data in a specific order. I implemented a binary search tree with these operations.

## Structure

The `BinarySearchTree`'s structure consists of nested nodes. `BinarySearchTree` has methods for interacting with the nodes and contains the `head` node, which is the main node. The properties and methods are described below:

## BinarySearchTree

The Binary Search Tree Class

**Kind**: global class

- [BinarySearchTree](#BinarySearchTree)
  - [new BinarySearchTree(head)](#new_BinarySearchTree_new)
  - [.minimum](#BinarySearchTree+minimum) ⇒ <code>DataNode.&lt;Data&gt;</code> \| <code>null</code>
  - [.maximum](#BinarySearchTree+maximum) ⇒ <code>DataNode.&lt;Data&gt;</code> \| <code>null</code>
  - [.head](#BinarySearchTree+head)
  - [.head](#BinarySearchTree+head)
  - [.getIfShouldInsertOnSide(node, data, side)](#BinarySearchTree+getIfShouldInsertOnSide) ⇒ <code>boolean</code>
  - [.tryInsertingNodeOnSide(node, side, data)](#BinarySearchTree+tryInsertingNodeOnSide)
  - [.insert(data, startNode)](#BinarySearchTree+insert)
  - [.replaceWithNode(nodeToReplace, node)](#BinarySearchTree+replaceWithNode)
  - [.getSideTraverser(side)](#BinarySearchTree+getSideTraverser) ⇒ <code>function</code>
  - [.getMaximumValue()](#BinarySearchTree+getMaximumValue) ⇒ <code>Data</code> \| <code>null</code>
  - [.replaceNodeWithMinimumOfRightTree(nodeToDelete)](#BinarySearchTree+replaceNodeWithMinimumOfRightTree)
  - [.replaceNodeWithChild(nodeToDelete)](#BinarySearchTree+replaceNodeWithChild)
  - [.findParentNode(data, node)](#BinarySearchTree+findParentNode)
  - [.removeNodeFromParent(nodeToDelete)](#BinarySearchTree+removeNodeFromParent)
  - [.deleteNode(nodeToDelete)](#BinarySearchTree+deleteNode)
  - [.traverse(startNode)](#BinarySearchTree+traverse) ⇒ <code>IterableIterator.&lt;Data&gt;</code>

### new BinarySearchTree(head)

| Param | Type              | Description                                  |
| ----- | ----------------- | -------------------------------------------- |
| head  | <code>Data</code> | Generic type describing the type of DataNode |

**Example**

```js
new BinarySearchTree<number>()
```

### binarySearchTree.minimum ⇒ <code>DataNode.&lt;Data&gt;</code> \| <code>null</code>

Gets the minimum node of a tree.

**Kind**: instance property of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>DataNode.&lt;Data&gt;</code> \| <code>null</code> - : Returns the minimum node or null

| Param | Type              | Description                       |
| ----- | ----------------- | --------------------------------- |
|       | <code>node</code> | The node to start traversing from |

**Example**

```js
tree.minimum()
```

### binarySearchTree.maximum ⇒ <code>DataNode.&lt;Data&gt;</code> \| <code>null</code>

Gets the maximum node of a tree.

**Kind**: instance property of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>DataNode.&lt;Data&gt;</code> \| <code>null</code> - : Returns the maximum node or null

| Param | Type              | Description                       |
| ----- | ----------------- | --------------------------------- |
|       | <code>node</code> | The node to start traversing from |

**Example**

```js
tree.maximum()
```

### binarySearchTree.head

**Kind**: instance property of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Example**

```js
tree.head
```

### binarySearchTree.head

**Kind**: instance property of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Example**

```js
tree.head = null
```

### binarySearchTree.getIfShouldInsertOnSide(node, data, side) ⇒ <code>boolean</code>

Returns whether it should insert on a side depending on the node's value

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| node  | <code>node</code> | The node to insert on |
| data  | <code>data</code> | The data to insert    |
| side  | <code>side</code> | "left" or "right"     |

**Example**

```js
this.getIfShouldInsertOnSide(node, data, side)
```

### binarySearchTree.tryInsertingNodeOnSide(node, side, data)

Gets whether a node should be inserted on a side, then tries to insert it.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| node  | <code>node</code> | The node to insert on |
| side  | <code>data</code> | The data to insert    |
| data  | <code>side</code> | "left" or "right"     |

**Example**

```js
this.tryInsertingNodeOnSide(startNode, 'left', data)
```

### binarySearchTree.insert(data, startNode)

Creates a new node with data and inserts it into the tree.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)

| Param     | Type                   | Description                                |
| --------- | ---------------------- | ------------------------------------------ |
| data      | <code>data</code>      | The data to insert                         |
| startNode | <code>startNode</code> | The node to start the insertion process on |

**Example**

```js
tree.insert(100)
```

### binarySearchTree.replaceWithNode(nodeToReplace, node)

Replaces a node

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)

| Param         | Type                       | Description              |
| ------------- | -------------------------- | ------------------------ |
| nodeToReplace | <code>nodeToReplace</code> | The node to replace      |
| node          | <code>node</code>          | The node to replace with |

**Example**

```js
tree.insert(100)
tree.insert(99)
tree.replaceWithNode(tree.head, tree.head.left)
```

### binarySearchTree.getSideTraverser(side) ⇒ <code>function</code>

Gets a function that traverses the tree in a given direction.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>function</code> - - a traverser function

| Param | Type              | Description              |
| ----- | ----------------- | ------------------------ |
| side  | <code>side</code> | Either "left" or "right" |

**Example**

```js
tree.getSideTraverser('left')
```

### binarySearchTree.getMaximumValue() ⇒ <code>Data</code> \| <code>null</code>

Gets the maximum value of a tree.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>Data</code> \| <code>null</code> - : Returns the maximum value or null  
**Example**

```js
tree.getMaximumValue()
```

### binarySearchTree.replaceNodeWithMinimumOfRightTree(nodeToDelete)

Replaces the node that will be deleted with the minimum of the right side.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)

| Param        | Type                      | Description        |
| ------------ | ------------------------- | ------------------ |
| nodeToDelete | <code>nodeToDelete</code> | The node to delete |

**Example**

```js
tree.replaceNodeWithMinimumOfRightTree(tree.head)
```

### binarySearchTree.replaceNodeWithChild(nodeToDelete)

Replaces a node with either its left or right child, depending on which one exists.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)

| Param        | Type                      | Description        |
| ------------ | ------------------------- | ------------------ |
| nodeToDelete | <code>nodeToDelete</code> | The node to delete |

**Example**

```js
tree.replaceNodeWithChild(tree.head)
```

### binarySearchTree.findParentNode(data, node)

Finds the parent node of a node with specific data

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)

| Param | Type              | Description                       |
| ----- | ----------------- | --------------------------------- |
| data  | <code>data</code> | The data to find                  |
| node  | <code>node</code> | The node to begin traversing from |

**Example**

```js
tree.insert(90)
tree.insert(100)
// Returns the head node (the one with 90)
tree.findParentNode(100)
```

### binarySearchTree.removeNodeFromParent(nodeToDelete)

Finds the parent node and removes its reference to a specific child

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)

| Param        | Type                      | Description        |
| ------------ | ------------------------- | ------------------ |
| nodeToDelete | <code>nodeToDelete</code> | The node to delete |

**Example**

```js
tree.insert(100)
tree.insert(90)
tree.removeNodeFromParent(tree.head.left)
```

### binarySearchTree.deleteNode(nodeToDelete)

Deletes a node, replacing it if necessary.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)

| Param        | Type                      | Description        |
| ------------ | ------------------------- | ------------------ |
| nodeToDelete | <code>nodeToDelete</code> | The node to delete |

**Example**

```js
tree.insert(100)
tree.deleteNode(tree.head)
```

### binarySearchTree.traverse(startNode) ⇒ <code>IterableIterator.&lt;Data&gt;</code>

A generator method to traverse the tree. Yields the data, then left, then right.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>IterableIterator.&lt;Data&gt;</code> - : An iterator with the node data

| Param     | Type                   | Description                       |
| --------- | ---------------------- | --------------------------------- |
| startNode | <code>startNode</code> | The node to start traversing from |

**Example**

```js
const generator = tree.traverse()
const { value } = generator.next()
```

## Analysis

### Insertion

The time complexity for insertions is `O(n)` in the worst case. The `insert` method only uses recursion when inserting data on a side and the node already has children. Since it always calls itself with a nested node when using recursion, the maximum number of times it can call itself is `n`. Therefore, the time complexity is `n`. 

The insertion operation has an average time complexity of `O(log n)`. When using recursion, the operation will compare the `data` to the current node's data. Then, it will choose to call itself with either the left or right side (but not both). If the tree is balanced, then the operation will disregard half of the nodes on each recursive iteration. Therefore, the time complexity is `O(log n)`.

The best-case time complexity is constant because the operation will never call itself if the given node is `null`.

### Deletion

The deletion operation has a worst-case time complexity of `O(n)`. The `deleteNode` function must be called with a valid node. When it has two children, the function will replace the node with the minimum value on the right side. Therefore, it must find the minimum value by calling `minimum`, which calls itself to traverse towards the left until it reaches a leaf node. Since the tree is not guarantee to balanced, `minimum` has a time complexity of about `O(n)`. When `deleteNode` is called with a node that has either a left or right child (but not both), it will replace the node with one of its children, which takes constant time. Finally, when `deleteNode` is called with a node with no children, it will find the parent node by calling `findParentNode`. This method can call itself as long as it still has children, which means it has a time complexity of about `O(n)`. Therefore, the worst-case time complexity is `O(n)`.

This operation has an average time complexity of `O(log n)` because both `findParentNode` and `minimum` disregard half of the nodes on each recursive call, given a balanced tree.

The best-case time complexity is constant because the operation will not call itself if the number of children is 0 or 1.

### Maximum

The `getMaximumValue` method uses the same principles as the `minimum` function. Since the tree is not guaranteed to be balanced, it has a worst-case time complexity of `O(n)`.

This operation has an average time complexity of `O(log n)` because it disregards half of the nodes (one side) for each recursive call, given a balanced tree.

The best-case time complexity is constant because the operation will never call itself if the given node is `null`.

### Traverse

The `traverse` generator is designed to traverse through each node in the tree. Since it calls itself with a nested node until it reaches a leaf, `traverse` has a time complexity of `O(n)`.

Since it is designed to iterate over each node, this operation has an average time complexity of `O(n)`.

The best-case time complexity is constant because the operation will never call itself if the given node is `null`.


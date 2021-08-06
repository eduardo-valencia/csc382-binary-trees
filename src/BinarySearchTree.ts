import DataNode from './Node'

export type Side = 'left' | 'right'

/**
 * The Binary Search Tree Class
 * @param {Data} - Generic type describing the type of DataNode
 */
class BinarySearchTree<Data> {
  /**
   * The head node of the tree, which is used to access other nodes.
   */
  private _head: DataNode<Data> | null

  /**
   * @param {head} - The head node of the tree
   * @example
   * new BinarySearchTree<number>()
   */
  constructor(head: BinarySearchTree<Data>['_head'] = null) {
    this._head = head
  }

  /**
   * @example
   * tree.head
   */
  get head(): BinarySearchTree<Data>['_head'] {
    return this._head
  }

  /**
   * @example
   * tree.head = null
   */
  set head(head: BinarySearchTree<Data>['_head']) {
    this._head = head
  }

  /**
   * A generator method to traverse the tree. Yields the data, then left, then right.
   * @param {startNode}: The node to start traversing from
   * @returns {IterableIterator<Data>}: An iterator with the node data
   * @example
   * const generator = tree.traverse()
   * const { value } = generator.next()
   */
  *traverse(
    startNode: DataNode<Data> | null = this.head
  ): IterableIterator<Data> {
    if (!startNode) {
      throw new Error(
        'Tried traversing the node, but the start node does not exist.'
      )
    }
    yield startNode.data
    if (startNode.left) {
      yield this.traverse(startNode.left).next().value
    }
    if (startNode.right) {
      yield this.traverse(startNode.right).next().value
    }
  }

  /**
   * Returns whether it should insert on a side depending on the node's value
   * @param {node}: The node to insert on
   * @param {data}: The data to insert
   * @param {side}: "left" or "right"
   * @returns {boolean}
   * @example
   * this.getIfShouldInsertOnSide(
      node,
      data,
      side
    )
   */
  getIfShouldInsertOnSide = (
    node: DataNode<Data>,
    data: Data,
    side: Side
  ): boolean => {
    const isGreaterThanCurrentData = data > node.data
    return side === 'left'
      ? !isGreaterThanCurrentData
      : isGreaterThanCurrentData
  }

  /**
   * Gets whether a node should be inserted on a side, then tries to insert it.
   * @param {node}: The node to insert on
   * @param {data}: The data to insert
   * @param {side}: "left" or "right"
   * @example
   * this.tryInsertingNodeOnSide(startNode, 'left', data)
   */
  tryInsertingNodeOnSide = (
    node: DataNode<Data>,
    side: Side,
    data: Data
  ): void => {
    const shouldInsertOnSide: boolean = this.getIfShouldInsertOnSide(
      node,
      data,
      side
    )
    if (!shouldInsertOnSide) return
    // Because you do not want to accidentally replace a child.
    if (!node[side]) {
      node[side] = new DataNode<Data>(data)
    }
  }

  /**
   * Creates a new node with data and inserts it into the tree.
   * @param {data}: The data to insert
   * @param {startNode}: The node to start the insertion process on
   * @example
   * tree.insert(100)
   */
  insert = (data: Data, startNode: DataNode<Data> | null = this.head): void => {
    // Because the head might be empty
    if (!startNode && !this.head) {
      this.head = new DataNode<Data>(data)
      // because the user might accidentally pass null as the startNode
    } else if (!startNode) {
      throw new Error('Start node does not exist')
      // Handles duplicates
    } else if (startNode.data === data) {
      startNode.frequency++
    } else if (data < startNode.data && startNode.left) {
      this.insert(data, startNode.left)
    } else if (data > startNode.data && startNode.right) {
      this.insert(data, startNode.right)
    } else {
      // Handles insertions when there is not an existing child
      this.tryInsertingNodeOnSide(startNode, 'left', data)
      this.tryInsertingNodeOnSide(startNode, 'right', data)
    }
  }

  replaceWithNode = (
    nodeToReplace: DataNode<Data>,
    node: DataNode<Data>
  ): void => {
    nodeToReplace.data = node.data
    nodeToReplace.left = node.left
    nodeToReplace.right = node.right
  }

  getSideTraverser =
    (side: Side) =>
    (node: DataNode<Data> | null = this.head): DataNode<Data> | null => {
      if (node === null) {
        return null
      } else if (node[side]) {
        return this.getSideTraverser(side)(node[side]!)
      }
      return node
    }

  minimum = this.getSideTraverser('left')

  maximum = this.getSideTraverser('right')

  getMaximumValue = (): Data | null => {
    const maximum = this.maximum()
    if (maximum) {
      return maximum.data
    }
    return null
  }

  replaceNodeWithMinimumOfRightTree = (nodeToDelete: DataNode<Data>): void => {
    const minimum = this.minimum(nodeToDelete.right)
    if (minimum) {
      this.replaceWithNode(nodeToDelete, minimum)
    }
  }

  replaceNodeWithChild = (nodeToDelete: DataNode<Data>): void => {
    const child = nodeToDelete.left || nodeToDelete.right
    this.replaceWithNode(nodeToDelete, child!)
  }

  findParentNode = (
    data: Data,
    node: DataNode<Data> | null = this.head
  ): DataNode<Data> | null => {
    if (node === null) {
      return null
    } else if (!node.left && !node.right) {
      return null
    } else if (
      (node.left && data === node.left.data) ||
      (node.right && data === node.right.data)
    ) {
      return node
    } else if (node.left && data < node.data) {
      return this.findParentNode(data, node.left)
    } else if (node.right && data > node.data) {
      return this.findParentNode(data, node.right)
    }
    return null
  }

  removeNodeFromParent = (nodeToDelete: DataNode<Data>): void => {
    const parentNode = this.findParentNode(nodeToDelete.data)
    if (parentNode) {
      const side: Side = parentNode.left === nodeToDelete ? 'left' : 'right'
      parentNode[side] = null
    } else {
      this.head = null
    }
  }

  deleteNode = (nodeToDelete: DataNode<Data>): void => {
    if (nodeToDelete.left && nodeToDelete.right) {
      return this.replaceNodeWithMinimumOfRightTree(nodeToDelete)
    } else if (nodeToDelete.left || nodeToDelete.right) {
      return this.replaceNodeWithChild(nodeToDelete)
    }
    return this.removeNodeFromParent(nodeToDelete)
  }
}

export default BinarySearchTree

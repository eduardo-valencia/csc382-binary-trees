import DataNode from "./Node";

class BinarySearchTree<Data> {
  private _head: DataNode<Data> | null;

  constructor(head: BinarySearchTree<Data>["_head"] = null) {
    this._head = head;
  }

  get head(): BinarySearchTree<Data>["_head"] {
    return this._head;
  }

  set head(head: BinarySearchTree<Data>["_head"]) {
    this._head = head;
  }

  *traverse(
    startNode: DataNode<Data> | null = this.head
  ): IterableIterator<Data> {
    if (!startNode) {
      throw new Error(
        "Tried traversing the node, but the start node does not exist."
      );
    }
    yield startNode.data;
    if (startNode.left) {
      yield this.traverse(startNode.left).next().value;
    }
    if (startNode.right) {
      yield this.traverse(startNode.right).next().value;
    }
  }
}

export default BinarySearchTree;

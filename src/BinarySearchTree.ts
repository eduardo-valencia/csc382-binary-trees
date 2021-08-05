import DataNode from "./Node";

type Side = "left" | "right";

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

  getIfShouldInsertOnSide = (
    node: DataNode<Data>,
    data: Data,
    side: Side
  ): boolean => {
    const isGreaterThanCurrentData = data > node.data;
    return side === "left"
      ? !isGreaterThanCurrentData
      : isGreaterThanCurrentData;
  };

  tryInsertingNodeOnSide = (
    node: DataNode<Data>,
    side: Side,
    data: Data
  ): void => {
    const shouldInsertOnSide: boolean = this.getIfShouldInsertOnSide(
      node,
      data,
      side
    );
    if (!shouldInsertOnSide) return;
    if (!node[side]) {
      node[side] = new DataNode<Data>(data);
    }
  };

  insert = (data: Data, startNode: DataNode<Data> | null = this.head): void => {
    if (!startNode) return;
    else if (startNode.data === data) {
      startNode.frequency++;
    } else if (data < startNode.data && startNode.left) {
      this.insert(data, startNode.left);
    } else if (data > startNode.data && startNode.right) {
      this.insert(data, startNode.right);
    } else {
      this.tryInsertingNodeOnSide(startNode, "left", data);
      this.tryInsertingNodeOnSide(startNode, "right", data);
    }
  };
}

export default BinarySearchTree;

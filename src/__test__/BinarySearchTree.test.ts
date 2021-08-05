import BinarySearchTree, { Side } from "../BinarySearchTree";
import DataNode from "../Node";

type NodeType = number;

type DataNodeType = DataNode<NodeType>;

describe("Traversal", () => {
  const head = new DataNode<number>(100);
  const tree = new BinarySearchTree<number>(head);
  head.left = new DataNode<number>(99);
  head.right = new DataNode<number>(101);

  const generator = tree.traverse();

  const compareYieldWithNodeVaue = (node: DataNode<number>): void => {
    const { value } = generator.next();
    expect(value).toEqual(node.data);
  };

  it("Should return the head's value first", () => {
    compareYieldWithNodeVaue(head);
  });

  it("Should return the value on the left next", () => {
    compareYieldWithNodeVaue(head.left as DataNode<number>);
  });

  it("Should return the value on the right next", () => {
    compareYieldWithNodeVaue(head.right as DataNode<number>);
  });
});

const testInsertionOnSide = (
  tree: BinarySearchTree<NodeType>,
  parentNode: DataNode<NodeType>,
  side: Side,
  dataToInsert: NodeType,
  insertionPoint: DataNode<NodeType> = parentNode
): void => {
  tree.tryInsertingNodeOnSide(parentNode, side, dataToInsert);
  expect(insertionPoint[side]).not.toBeNull();
  expect(insertionPoint[side]!.data).toEqual(dataToInsert);
};

describe("tryInsertingNodeOnSide", () => {
  const head = new DataNode<number>(2);
  const tree = new BinarySearchTree<number>(head);

  it("Should insert the node on the left side when the value is less than the data", () => {
    testInsertionOnSide(tree, tree.head!, "left", 1);
  });

  it("Should insert the node on the right side when the value is greater than the data", () => {
    testInsertionOnSide(tree, tree.head!, "right", 3);
  });
});

describe("Insertion", () => {
  const tree = new BinarySearchTree<NodeType>();

  it("Should set the head if the tree is empty", () => {
    const data = 100;
    tree.insert(data);
    expect(tree.head).not.toBeNull();
    expect(tree.head!.data).toEqual(data);
  });

  it("Should insert the node on the right side when the data is greater than the node", () => {
    testInsertionOnSide(tree, tree.head!, "right", tree.head!.data + 1);
  });

  it("Should insert the node on the left side when the data is less than the node", () => {
    testInsertionOnSide(tree, tree.head!, "left", tree.head!.data - 1);
  });

  it("Should increment the frequency when the data is equal to an existing node", () => {
    tree.insert(tree.head!.data);
    expect(tree.head!.frequency).toEqual(2);
  });

  it("Should insert the node even if the parent node has children", () => {
    const dataToInsert = tree.head!.data - 2;
    // Should insert on the left side of the left node
    tree.insert(dataToInsert);
    expect(tree.head!.left!.left).not.toBeNull();
  });
});

describe("Deletion", () => {
  let tree: BinarySearchTree<NodeType> | null;

  beforeEach(() => {
    tree = new BinarySearchTree<NodeType>();
  });

  it("Should delete the head if there is only one node", () => {
    tree!.insert(1);
    tree!.deleteNode(tree!.head!);
    expect(tree!.head).toBeNull();
  });

  it("Should remove the parent's reference when the node to delete is a child.", () => {
    tree!.insert(100);
    tree!.insert(99);
    const leftChild = tree!.head!.left!;
    tree!.deleteNode(leftChild);
    expect(tree!.head!.left!).toBeNull();
  });

  describe("When the node has either a left or right child", () => {
    beforeEach(() => {
      tree!.insert(100);
    });

    const insertOnSide = (node: DataNode<NodeType>, side: Side): void => {
      const nodeData: NodeType = node.data;
      const dataToInsert = side === "left" ? nodeData - 1 : nodeData + 1;
      tree!.insert(dataToInsert);
    };

    const testNodeDataIsEqual = (
      node1: DataNodeType,
      node2: DataNodeType
    ): void => {
      expect(node1.data).toEqual(node2.data);
      expect(node1.left).toEqual(node2.left);
      expect(node1.right).toEqual(node2.right);
    };

    function testHeadReplacedWithSide(side: Side) {
      insertOnSide(tree!.head!, side);
      const insertedNode = tree!.head![side];
      insertOnSide(insertedNode!, "left");
      const headChildCopy: DataNodeType = insertedNode!.getCopy();

      tree!.deleteNode(tree!.head!);

      const head = tree!.head!;
      testNodeDataIsEqual(head, headChildCopy);
    }

    it("Should replace the node with its left child if it only has a left child", () => {
      testHeadReplacedWithSide("left");
    });

    it("Should replace the node with its right child if it only has a right child", () => {
      testHeadReplacedWithSide("right");
    });

    it("Should replace the node with the minimum value if it has multiple children", () => {
      const head = tree!.head!;
      insertOnSide(head, "left");
      insertOnSide(head, "right");
      insertOnSide(head.left!, "left");
      insertOnSide(head.right!, "right");
      tree!.deleteNode(head);
      // expect
    });
  });
});

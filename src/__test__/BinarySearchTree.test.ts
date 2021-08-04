import BinarySearchTree from "../BinarySearchTree";
import DataNode from "../Node";

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

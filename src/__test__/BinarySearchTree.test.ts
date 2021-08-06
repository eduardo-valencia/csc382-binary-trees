import BinarySearchTree, { Side } from '../BinarySearchTree'
import DataNode from '../Node'

// Define an alias for the node type
type NodeType = number

// Define the type of data node
type DataNodeType = DataNode<NodeType>

describe('Traversal', () => {
  // Make a tree with a head, which has a left and right node.
  const head = new DataNode<number>(100)
  const tree = new BinarySearchTree<number>(head)
  head.left = new DataNode<number>(99)
  head.right = new DataNode<number>(101)

  const generator = tree.traverse()

  // Define function for testing that the generator's yield is the same as the node's data
  const compareYieldWithNodeVaue = (node: DataNode<number>): void => {
    const { value } = generator.next()
    expect(value).toEqual(node.data)
  }

  it("Should return the head's value first", () => {
    compareYieldWithNodeVaue(head)
  })

  it('Should return the value on the left next', () => {
    compareYieldWithNodeVaue(head.left as DataNode<number>)
  })

  it('Should return the value on the right next', () => {
    compareYieldWithNodeVaue(head.right as DataNode<number>)
  })
})

// Test that data was inserted on a node on the correct side.
const testInsertionOnSide = (
  tree: BinarySearchTree<NodeType>,
  parentNode: DataNode<NodeType>,
  side: Side,
  dataToInsert: NodeType,
  insertionPoint: DataNode<NodeType> = parentNode
): void => {
  tree.tryInsertingNodeOnSide(parentNode, side, dataToInsert)
  expect(insertionPoint[side]).not.toBeNull()
  expect(insertionPoint[side]!.data).toEqual(dataToInsert)
}

describe('tryInsertingNodeOnSide', () => {
  // Make a tree with head with 2.
  const head = new DataNode<number>(2)
  const tree = new BinarySearchTree<number>(head)

  it('Should insert the node on the left side when the value is less than the data', () => {
    testInsertionOnSide(tree, tree.head!, 'left', 1)
  })

  it('Should insert the node on the right side when the value is greater than the data', () => {
    testInsertionOnSide(tree, tree.head!, 'right', 3)
  })
})

describe('Insertion', () => {
  const tree = new BinarySearchTree<NodeType>()

  it('Should set the head if the tree is empty', () => {
    const data = 100
    tree.insert(data)
    expect(tree.head).not.toBeNull()
    expect(tree.head!.data).toEqual(data)
  })

  it('Should insert the node on the right side when the data is greater than the node', () => {
    testInsertionOnSide(tree, tree.head!, 'right', tree.head!.data + 1)
  })

  it('Should insert the node on the left side when the data is less than the node', () => {
    testInsertionOnSide(tree, tree.head!, 'left', tree.head!.data - 1)
  })

  it('Should increment the frequency when the data is equal to an existing node', () => {
    tree.insert(tree.head!.data)
    expect(tree.head!.frequency).toEqual(2)
  })

  it('Should insert the node even if the parent node has children', () => {
    const dataToInsert = tree.head!.data - 2
    // Should insert on the left side of the left node
    tree.insert(dataToInsert)
    expect(tree.head!.left!.left).not.toBeNull()
  })
})

describe('Deletion', () => {
  let tree: BinarySearchTree<NodeType> | null

  // Reset the tree on each test
  beforeEach(() => {
    tree = new BinarySearchTree<NodeType>()
  })

  it('Should delete the head if there is only one node', () => {
    tree!.insert(1)
    tree!.deleteNode(tree!.head!)
    expect(tree!.head).toBeNull()
  })

  it("Should remove the parent's reference when the node to delete is a child.", () => {
    // Head node
    tree!.insert(100)
    // Creates head's left child
    tree!.insert(99)
    const leftChild = tree!.head!.left!
    tree!.deleteNode(leftChild)
    expect(tree!.head!.left!).toBeNull()
  })

  describe('When the node has either a left or right child', () => {
    // Creates a head node on the new tree for each test
    beforeEach(() => {
      tree!.insert(100)
    })

    // Tries to insert on a specific side using simple incrementation
    // Will not work for nested nodes
    const insertOnSideByIncrementing = (
      node: DataNode<NodeType>,
      side: Side
    ): void => {
      const nodeData: NodeType = node.data
      const dataToInsert = side === 'left' ? nodeData - 1 : nodeData + 1
      tree!.insert(dataToInsert)
    }

    // Compares the data, left, and right properties
    const testNodeDataIsEqual = (
      node1: DataNodeType,
      node2: DataNodeType
    ): void => {
      expect(node1.data).toEqual(node2.data)
      expect(node1.left).toEqual(node2.left)
      expect(node1.right).toEqual(node2.right)
    }

    // Tests that head (which is what is being deleted) is replaced with a specific side
    function testHeadReplacedWithSide(side: Side) {
      // Adds the head's child
      insertOnSideByIncrementing(tree!.head!, side)
      const insertedNode = tree!.head![side]
      // Adds a left child to the head's child's
      insertOnSideByIncrementing(insertedNode!, 'left')
      // Makes copy so that we can test nodes are equal after we delete node
      const headChildCopy: DataNodeType = insertedNode!.getCopy()

      tree!.deleteNode(tree!.head!)

      const head = tree!.head!
      testNodeDataIsEqual(head, headChildCopy)
    }

    it('Should replace the node with its left child if it only has a left child', () => {
      testHeadReplacedWithSide('left')
    })

    it('Should replace the node with its right child if it only has a right child', () => {
      testHeadReplacedWithSide('right')
    })

    describe('When the node has multiple children', () => {
      const insertMinimumValueChildren = (): void => {
        // Adds a right child to the minimum node
        tree!.insert(100.75)
      }

      beforeEach(() => {
        const head = tree!.head!
        // Adds head's left child
        insertOnSideByIncrementing(head, 'left')
        // Adds head's right child
        insertOnSideByIncrementing(head, 'right')
        // Adds a left child to the head.right. This is the minimum.
        tree!.insert(100.5)
        // Adds a right child to the head.right
        tree!.insert(102)
        insertMinimumValueChildren()
      })

      it('Should replace the node with the minimum value if it has multiple children', () => {
        const head = tree!.head!
        // So we can compare the minimum to head after we delete minimum node
        const headRightLeftCopy = head.right!.left!.getCopy()
        tree!.deleteNode(head)
        testNodeDataIsEqual(head, headRightLeftCopy)
      })
    })
  })
})

describe('Maximum', () => {
  let tree = new BinarySearchTree<NodeType>()

  // reset tree for each test
  beforeEach(() => {
    tree = new BinarySearchTree<NodeType>()
  })

  // Adds a series of nodes and returns the greatest value
  const addNodesAndGetGreatestValue = (): NodeType => {
    tree.insert(100)
    const maxValue = 900
    tree.insert(maxValue)
    tree.insert(800)
    tree.insert(850)
    return maxValue
  }

  it('Should return the greatest value in the tree', () => {
    // Adds nodes and gets the expected max value
    const expectedMaxValue: NodeType = addNodesAndGetGreatestValue()
    // Gets the actual max value
    const maxValue: NodeType | null = tree.getMaximumValue()
    expect(maxValue).toEqual(expectedMaxValue)
  })

  it('Should return null when the tree is empty', () => {
    const maxValue: NodeType | null = tree.getMaximumValue()
    expect(maxValue).toBeNull()
  })
})

import prompts from 'prompts'

import BinarySearchTree from './BinarySearchTree'
import DataNode from './Node'

class DynamicTest {
  tree = new BinarySearchTree<number>()

  showSuccess = () => {
    console.info('Test succeeded')
  }

  showError = () => {
    console.error('Test failed')
  }

  promptForNumber = async (message: string): Promise<number> => {
    const { data } = await prompts({
      type: 'number',
      message,
      name: 'data',
    })
    return data
  }

  // Prompt user for number and insert it
  insert = async () => {
    const data: number = await this.promptForNumber(
      'What data do you want to insert?'
    )
    this.tree.insert(data)
    const parent = this.tree.findParentNode(data)
    const headHasData = this.tree.head && this.tree.head.data === data
    if (headHasData || parent) {
      return this.showSuccess()
    }
    return this.showError()
  }

  findNode = (data: number): DataNode<number> | undefined => {
    if (!this.tree.head) return undefined
    else if (this.tree.head.data === data) {
      return this.tree.head
    }
    const parentNode = this.tree.findParentNode(data)
    if (!parentNode) return undefined
    else if (parentNode.left && parentNode.left.data === data) {
      return parentNode.left
    }
    return parentNode.right!
  }

  showWhetherNodeWasDeleted = (nodeToDelete: DataNode<number>): void => {
    const data: number = nodeToDelete.data
    this.tree.deleteNode(nodeToDelete)
    const deletedNode = this.findNode(data)
    if (deletedNode) {
      return console.error('Node not deleted.')
    }
    return console.info('Node successfully deleted.')
  }

  // Prompt user for node value to delete, find it, then delete it
  delete = async () => {
    const data: number = await this.promptForNumber(
      'What data do you want to delete?'
    )
    const nodeToDelete = this.findNode(data)
    if (nodeToDelete) {
      return this.showWhetherNodeWasDeleted(nodeToDelete)
    }
    throw new Error('You must try to delete a node that already exists.')
  }

  // Traverse the tree and print values
  traverse = async () => {
    const generator = this.tree.traverse()
    let value = generator.next().value
    while (value) {
      console.log(value)
      value = generator.next().value
    }
  }

  // Find the maximum and print it
  maximum = (): void => {
    const maximum: DataNode<number> | null = this.tree.maximum()
    return console.log(maximum)
  }

  // Ask the user which operation they want
  promptOption = async (): Promise<number> => {
    const { option } = await prompts({
      type: 'number',
      message:
        'Please choose an option. 0 = quit. 1 = insert. 2 = remove. 3 = maximum. 4 = traverse.',
      name: 'option',
    })
    return option
  }

  // Ask user and choose operation
  runTests = async () => {
    let option: number = await this.promptOption()
    while (option !== 0) {
      switch (option) {
        case 1:
          await this.insert()
          break
        case 2:
          await this.delete()
          break
        case 3:
          this.maximum()
          break
        default:
          await this.traverse()
          break
      }
      option = await this.promptOption()
    }
  }
}

const test = new DynamicTest()
test.runTests()

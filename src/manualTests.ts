import prompts from 'prompts'

import BinarySearchTree from './BinarySearchTree'

class DynamicTest {
  tree = new BinarySearchTree<number>()

  showSuccess = () => {
    console.info('Test succeeded')
  }

  showError = () => {
    console.error('Test failed')
  }

  // Prompt user for number and insert it
  insert = async () => {
    const { data } = await prompts({
      type: 'number',
      message: 'What data do you want to insert?',
      name: 'data',
    })
    this.tree.insert(data)
    const parent = this.tree.findParentNode(data)
    const headHasData = this.tree.head && this.tree.head.data === data
    if (headHasData || parent) {
      return this.showSuccess()
    }
    return this.showError()
  }

  // Prompt user for node value to delete, find it, then delete it

  // Traverse the tree and print values

  // Find the maximum and print it

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
        default:
          await this.insert()
      }
      option = await this.promptOption()
    }
  }
}

const test = new DynamicTest()
test.runTests()

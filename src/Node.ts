/**
 * The container class for storing data.
 * @param {Data} - A generic type for the type of data to store.
 */
class DataNode<Data> {
  private _data: Data
  private _left: DataNode<Data> | null
  private _right: DataNode<Data> | null
  private _frequency: number

  /**
   * The constructor
   * @param {_data}: The data to store
   * @param {_left}: The left node
   * @param {_right}: The right node
   * @example
   * new DataNode<number>(100)
   */
  constructor(
    _data: DataNode<Data>['_data'],
    _left: DataNode<Data>['_left'] = null,
    _right: DataNode<Data>['_right'] = null
  ) {
    this._data = _data
    this._left = _left
    this._right = _right
    this._frequency = 1
  }

  /**
   * @example
   * node.left
   */
  get left(): DataNode<Data>['_left'] {
    return this._left
  }

  /**
   * @example
   * node.left = null
   */
  set left(left: DataNode<Data>['_left']) {
    this._left = left
  }

  /**
   * @example
   * node.right = null
   */
  set right(right: DataNode<Data>['_right']) {
    this._right = right
  }

  /**
   * @example
   * node.right
   */
  get right(): DataNode<Data>['_right'] {
    return this._right
  }

  /**
   * @example
   * node.data
   */
  get data(): Data {
    return this._data
  }

  /**
   * @example
   * node.data = 0
   */
  set data(data: Data) {
    this._data = data
  }

  /**
   * @example
   * node.frequency
   */
  get frequency(): DataNode<Data>['_frequency'] {
    return this._frequency
  }

  /**
   * @example
   * node.frequency = 3
   */
  set frequency(frequency: DataNode<Data>['_frequency']) {
    this._frequency = frequency
  }

  /**
   * Returns a copy of the node.
   * @returns {DataNode}
   * @example
   * node.getCopy()
   */
  getCopy = () => {
    const copy = new DataNode<Data>(this.data, this.left, this.right)
    copy.frequency = this.frequency
    return copy
  }
}

export default DataNode

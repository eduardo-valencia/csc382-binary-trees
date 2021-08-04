class DataNode<Data> {
  _data: Data;
  _left: DataNode<Data> | null;
  _right: DataNode<Data> | null;
  _frequency: number;

  constructor(
    _data: DataNode<Data>["_data"],
    _left: DataNode<Data>["_left"] = null,
    _right: DataNode<Data>["_right"] = null
  ) {
    this._data = _data;
    this._left = _left;
    this._right = _right;
    this._frequency = 1;
  }

  get left(): DataNode<Data>["_left"] {
    return this._left;
  }

  set left(left: DataNode<Data>["_left"]) {
    this._left = left;
  }

  set right(right: DataNode<Data>["_right"]) {
    this._right = right;
  }

  get right(): DataNode<Data>["_right"] {
    return this._right;
  }

  get data(): Data {
    return this.data;
  }

  set data(data: Data) {
    this._data = data;
  }

  get frequency(): DataNode<Data>["_frequency"] {
    return this._frequency;
  }

  set frequency(frequency: DataNode<Data>["_frequency"]) {
    this._frequency = frequency;
  }
}

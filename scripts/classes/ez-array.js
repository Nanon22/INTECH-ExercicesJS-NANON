class EZArray extends Array {
  constructor() {
    super();
  }
  get first() { return this[0]; }
  get last() { return this[this.length - 1]; }
}

export { EZArray }
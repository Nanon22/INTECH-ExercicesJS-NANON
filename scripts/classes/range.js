class Range {
    #from;
    #to;
    constructor(from, to) {
      if(from > to) {
        let save = to;
        to = from;
        from = save;
      }
      this.#from = from;
      this.#to = to;
    }
    get from() { return this.#from; }
    get to() { return this.#to; }
    includes(x) {
      return this.#from <= x && x <= this.#to;
    }

    toString() {
      return "(" + this.#from + "..." + "" + this.#to + ")";
    }

    static integerRangePattern = /\([0-9]+...[0-9]+\)/g;

    static parse(s) {
      if(s.match(Range.integerRangePattern)) {
        let groups = s.split('...');
        let from = parseInt(groups[0].substring(1))
        let to = parseInt(groups[1].substring(0, groups[0].length-1))

        return new Range(from, to);
      }
      throw 'String do not have the correct format';
    }

    
  }

  class Span extends Range {
    constructor(from, to) {
      let diff = Math.abs(Math.abs(from) - Math.abs(to));
      super(diff, diff + Math.abs(to))
    }
  }

  export { Range, Span }
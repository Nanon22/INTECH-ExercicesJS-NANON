function initWithHof(f) {
  return function (size, ...args){
    let tab = [];
    for (let i = 0; i < size; i++) {
      tab.push(f(i, ...args));
    }
    return tab
  };
}

const withZero = () => 0;
const from = (from, index) => from + index;

const initWithZeros = initWithHof(withZero);
const initFrom = initWithHof(from);


export {initWithHof, initWithZeros, initFrom, withZero, from}
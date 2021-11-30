function initWith(size, f) {
  let tab = [];
  for (let i = 0; i < size; i++) {
    tab.push(f(i));
  }
  return tab
}

const fromZero = index => index;
const from42 = index => 42 + index;


export { initWith, from42, fromZero }
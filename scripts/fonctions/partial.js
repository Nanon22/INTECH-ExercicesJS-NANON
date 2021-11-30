function partial(f, ...args) {
  return function (...innerArgs) {
    return f(...args, ...innerArgs)
  }
}

export { partial }
function compose(f, g) {
  return function(val, ...arg) {
    return f(g(val, ...arg))
  }
}

export { compose }
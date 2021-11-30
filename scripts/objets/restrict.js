function restrict(target, keep) {
  for(let prop in target) {
    if(!(prop in keep)) {
      delete target[prop]
    }
  }
  return target
}

export { restrict }
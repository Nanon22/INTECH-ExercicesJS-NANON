function diff(source, propertyNames) {
  let keep = {...source};
  for (let [key, value] of Object.entries(propertyNames)) {
      delete keep[key]
  }
  return keep; 
}

export {diff}
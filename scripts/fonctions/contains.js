function contains(haystack, needle, startIndex = 0) {
  let returned = -1
  if(needle === "") { return returned }
  for(let i = startIndex; i < haystack.length; i++) {
    if(haystack.substring(i, i + needle.length) === needle) {
      return i
    }
  }
  return returned
}

export {contains}

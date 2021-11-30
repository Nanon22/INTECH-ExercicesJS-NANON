function split(str, sep = "") {
  let tab = []
  let last_sep = 0
  for(let i = 0; i < str.length; i++) {
    if(str.substring(i, i + sep.length) === sep) {
      if(i !== 0) {
        tab.push(str.substring(last_sep, i))
      }
      last_sep = i + sep.length
    }
  }
  if (str.substring(last_sep, str.length) !== ""){
    tab.push(str.substring(last_sep, str.length))
  }
  if(sep === "") {
    tab.splice(0,1)
  }
  return tab
}

export {split}

function deepEqual(tab1, tab2) {
  if((typeof tab1 === "object" && !Array.isArray(tab1) && tab1 !== null) && (typeof tab2 === "object" && !Array.isArray(tab2) && tab2 !== null)) {

    if(Object.keys(tab1).length !== Object.keys(tab2).length) return false

    let arrayMinLength = Object.keys(tab1).length >= Object.keys(tab2).length ? Object.keys(tab2).length : Object.keys(tab1).length

    for(let i = 0; i < arrayMinLength; i++) {
      if((Object.keys(tab1)[i] !== Object.keys(tab2)[i]) || !deepEqual(Object.values(tab1)[i], Object.values(tab2)[i])) {
        return false
      }
    } 

  } else if(Array.isArray(tab1) && Array.isArray(tab2)) {
    if(tab1.length !== tab2.length) return false

    let minLength = tab1.length >= tab2.length ? tab2.length : tab1.length

    for(let i = 0; i < minLength; i++) {
      if (!deepEqual(tab1[i], tab2[i])) return false
    }
  }
  
  else {
    if(tab1 !== tab2) {
      return false
    }
  }
  return true
}

export {deepEqual}
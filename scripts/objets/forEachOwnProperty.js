function customObj() {

  this.forEachOwnProperty = function (f) {
    for(let el of Object.keys(this)) {
      
      f(el.toString())
      
    }
  }
  
}

export {customObj}
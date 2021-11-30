import {padSpaces} from "../fonctions/padLeft"

function dump(obj, indent = 0) {
  let objToString = ""

  if(typeof obj === "object" && !Array.isArray(obj) && obj !== null) {

    objToString += "{\n"

    for (let [key, value] of Object.entries(obj)) {
      let added = key + " : " + dump(value, indent + 4) + ",\n"
      objToString += padSpaces(added, added.length + indent + 4)
    }

    objToString = objToString.substring(0, objToString.length-2)
    objToString += "\n" + padSpaces("}", indent + 1)
    
  } else if(Array.isArray(obj)) {

    objToString += "["
    for (let [key, value] of Object.entries(obj)) {
      let added = dump(value, indent + 4) + ", "
      objToString += added
    }
    objToString = objToString.substring(0, objToString.length -2)
    objToString += "]"
    
  }else if(typeof obj === "string") {

    objToString = "\"" + obj.toString() + "\""

  } else {

    objToString = obj
    
  }

  return objToString
}

export {dump}
function padLeft(char, str, quantity) {
  if(char.length > 1) {
    char = char[0]
  }
  if (str.length < quantity) {
    while(str.length !== quantity) {
      str = char + str
    }
  } else {
    str = str.substring(0, quantity)
  }
  return str
}

const padSpaces = padLeft.bind(undefined, " ")
const padZeros = padLeft.bind(undefined, "0")

export {padSpaces, padZeros, padLeft}
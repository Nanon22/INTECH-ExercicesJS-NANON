function padRight(char, str, quantity) {
  if(char.length > 1) {
    char = char[0]
  }
  if (str.length < quantity) {
    while(str.length !== quantity) {
      str += char
    }
  } else {
    str = str.substring(0, quantity)
  }
  return str
}

export { padRight }

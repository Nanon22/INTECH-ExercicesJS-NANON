/**
 * @param {Iterable} iterable Chaîne de caractère, Array, Map, Set
 * @param {function} f Fonction qui transforme chaque élément.
 */
 function* filter(iterable, f) {
  for(let element of iterable) {
    if(f(element)) {
      yield* element
    }
  }
}

export {filter}
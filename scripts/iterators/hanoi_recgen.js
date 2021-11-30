function* hanoi_recgen(nb, start, end) {
  let tours = [1,2,3]
  let thirdTour = tours.filter(x => (x !== start && x !== end))[0];
  if(nb === 1) {
    yield { f: start, t: end }
    return 
  } 
  yield* hanoi_recgen(nb - 1, start, thirdTour)
  yield { f: start, t: end }
  yield* hanoi_recgen(nb - 1, thirdTour, end)
}

export { hanoi_recgen }
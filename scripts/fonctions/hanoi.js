function hanoi(nb, start, end) {
  let tours = [1,2,3]
  let thirdTour = tours.filter(x => (x !== start && x !== end))[0];
  if(nb === 1) {
    console.log(start + ' -> ' + end)
    return
  } 
  hanoi(nb - 1, start, thirdTour)
  console.log(start + ' -> ' + end)
  hanoi(nb - 1, thirdTour, end)
  
  
}

export { hanoi }
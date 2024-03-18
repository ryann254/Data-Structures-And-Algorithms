function maximumCapital(c, k, capitals, profits) {
  // Initialize our variables -> currentCapital, capitalsMinHeap, profitsMaxHeap
  let currentCapital = c;
  let capitalsMinHeap = new MinHeap();
  let profitsMaxHeap = new MaxHeap();
  // Iterate over all the capitals and add them to the capitalsMinHeap
  for (let i = 0; i < capitals.length; i++) {
    capitalsMinHeap.push([capitals[i], i]);
  }
  // Initiate a new for loop with counter < k:
  for (let counter = 0; counter < k, counter++; ) {
    // Initiate a while loop to check if capitals[i] <= currentCapital
    while (
      capitalsMinHeap.size() > 0 &&
      capitalsMinHeap.peek()[0] <= currentCapital
    ) {
      let element = capitalsMinHeap.pop();
      let i = element[1];
      // then add their corresponding profits to the max heap
      profitsMaxHeap.push([profits[i]]);
    }
    // Check if the max-heap has any elements, if not break
    if (profitsMaxHeap.size() === 0) {
      break;
    }
    // Add up the currentCapital plus the maximum profit
    let element = profitsMaxHeap.pop();
    let j = element[0];
    currentCapital = currentCapital + j;
  }
  // return the currentCapital
  return currentCapital;
}

function kSmallestNumber(lists, k) {
  // Initialize the variables => lists.length, smallestKMinHeap
  let listLen = lists.length;
  let smallestKMinHeap = new MinHeap();
  // Store all first elements in each list in the minHeap
  for (let index = 0; index < listLen; index++) {
    if (lists[index].length === 0) {
      continue;
    } else {
      smallestKMinHeap.offer([lists[index][0], index, 0]);
    }
  }
  // Initialize more variables => listIndex, numIndex, smallestNum
  // numbersChecked
  let listIndex = 0,
    numIndex = 0,
    smallestNum = 0,
    numbersChecked = 0;
  // Iterate through all the lists till we have popped k number of
  // elements from our minHeap:
  while (smallestKMinHeap.size() > 0) {
    // Pop the root element from our minHeap and assign variables
    let result = smallestKMinHeap.poll();
    [smallestNum, listIndex, numIndex] = result;

    // Increment numbersChecked
    numbersChecked += 1;
    // Check if numbersChecked === k => break
    if (numbersChecked === k) break;

    // Else => Check if our list has a next element, if so
    // Add the element to our minHeap
    if (numIndex + 1 < lists[listIndex].length) {
      smallestKMinHeap.offer([
        lists[listIndex][numIndex + 1],
        listIndex,
        numIndex + 1,
      ]);
    }
  }

  return smallestNum ?? 0;
}

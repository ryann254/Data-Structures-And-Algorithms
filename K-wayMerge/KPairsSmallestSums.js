function kSmallestPairs(list1, list2, k) {
  // Initialize the variables => list1.length, minHeapForPairs, pairs.
  let listLen = list1.length,
    minHeapForPairs = new MinHeap(),
    pairs = [];
  // Iterate through list1 and add the sums of all the elements to list2[0] => [sum, i, j]
  for (let i = 0; i < Math.min(k, listLen); i++) {
    minHeapForPairs.offer([list1[i] + list2[0], i, 0]);
  }
  // Initialize a counter
  let counter = 1;
  // Iterate over the min-heap till we reach k number of pairs
  while (minHeapForPairs.size() > 0 && counter <= k) {
    // Pop the first pair in the minHeap and add it to our pairs array.
    let [sumOfPairs, i, j] = minHeapForPairs.poll();
    pairs.push([list1[i], list2[j]]);

    // If there's a next element in our list2 then add the next pair to our minHeap
    if (list2.length > j + 1) {
      minHeapForPairs.offer(list1[i] + list2[j + 1], i, j + 1);
    }
    counter++;
  }
  return pairs;
}

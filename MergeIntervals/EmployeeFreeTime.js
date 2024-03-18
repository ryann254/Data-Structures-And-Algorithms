function employeeFreeTime(schedule) {
  // Initialize the variables: the min-heap, the results array
  const minHeap = new MinHeap();
  let results = [];
  // Step 1: Iterate over all the employees' schedules and
  // store the start time of the first interval
  // in each employee's schedule
  for (let i = 0; i < schedule.length; i++) {
    const interval = schedule[i][0];
    minHeap.offer([interval.start, i, 0]);
  }
  // Example: [[[1,2], [3,5]],[[2,4], [5, 8]]]
  // Set the `previous` variable to the start time of the
  // first element in the heap.
  const [firstIntervalStart, firstEmployeeIndex, firstInterval] =
    minHeap.peek();
  let previous = schedule[firstEmployeeIndex][firstInterval].start;
  // Step 2: Iterate over the heap until its empty
  while (minHeap.size() > 0) {
    // Pop the first element in the heap and set the values of i, j(1, 0, 0)
    const [_, i, j] = minHeap.poll();
    // Store the exact interval in a variable
    const interval = schedule[i][j];
    // If the start time of our current interval > previous, then that interval is free and we push it to the results array.
    if (interval.start > previous) {
      const freeTime = new Interval(previous, interval.start);
      results.push(freeTime);
    }

    // Increment previous the current interval's end time
    previous = Math.max(previous, interval.end);
    // If there's another interval in the current employee's schedule
    // then add it to the heap
    if (j + 1 > schedule[i].length) {
      const nextInterval = schedule[i][j + 1];
      minHeap.offer([nextInterval.start, i, j + 1]);
    }
  }

  return results;
}

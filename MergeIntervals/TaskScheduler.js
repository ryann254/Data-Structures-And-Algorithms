function taskScheduler(tasks, n) {
  // Initialize the hashmap to store all the task frequencies.
  const frequencies = new Map();
  // Iterate over the tasks and store their frequencies.
  for (const task of tasks) {
    frequencies.set(task, (frequencies.get(task) || 0) + 1);
  }
  // Convert the map into an array of key-value pairs and
  // sort in ascending order.
  // {A: 3, B: 2, C: 1} => [[A, 3], [B, 2], [C, 1]]
  const sortedFrequencies = Array.from(frequencies.entries()).sort(
    (a, b) => a[1] - b[1]
  );
  // Get and store the maxFreq.
  const maxFreq = sortedFrequencies[sortedFrequencies.length - 1][1];
  sortedFrequencies.pop();
  // Calculate the idleTime
  let idleTime = (maxFreq - 1) * n;
  // Iterate over the sortedFrequencies array (sortedFrequencies.lenght > 0 && idleTime > 0) and decrement the idleTime and sortedFrequencies.
  while (sortedFrequencies.length > 0 && idleTime > 0) {
    idleTime -= Math.min(
      maxFreq - 1,
      sortedFrequencies[sortedFrequencies.length - 1][1]
    );
    sortedFrequencies.pop();
  }
  idleTime = Math.max(0, idleTime);
  return tasks.length + idleTime;
}

// Driver code
function main() {
  const allTasks = [
    ['A', 'A', 'B', 'B'],
    ['A', 'A', 'A', 'B', 'B', 'C', 'C'],
    ['S', 'I', 'V', 'U', 'W', 'D', 'U', 'X'],
    ['M', 'A', 'B', 'M', 'A', 'A', 'Y', 'B', 'M'],
    ['A', 'K', 'X', 'M', 'W', 'D', 'X', 'B', 'D', 'C', 'O', 'Z', 'D', 'E', 'Q'],
  ];
  const allNs = [2, 1, 0, 3, 3];

  for (let i = 0; i < allTasks.length; i++) {
    console.log(`${i + 1}.`, '\tTasks: ', allTasks[i]);
    console.log('\tn: ', allNs[i]);

    const min_time = taskScheduler(allTasks[i], allNs[i]);
    console.log('\tMinimum time required to execute the tasks: ', min_time);
    console.log('-'.repeat(100));
  }
}

main();

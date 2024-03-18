function insertInterval(existingIntervals, newInterval) {
  // Read the starting and ending time of the new interval, into separate variables
  let newStart = newInterval[0],
    newEnd = newInterval[1];
  console.log(`The new interval starts at ${newStart} and ends at ${newEnd}.`);

  // Initialize variables to help in iterating over the existing intervals list
  let i = 0,
    n = existingIntervals.length;
  console.log(
    'There are',
    n,
    'intervals present in the list already. We append the intervals that have the starting point smaller than our new interval to add.'
  );

  // Initialize an empty list to store the output
  let output = [];

  // Append all intervals that start before the new interval to the output list
  while (i < n && newStart > existingIntervals[i][0]) {
    output.push(existingIntervals[i]);
    i = i + 1;
  }
  console.log('The output before we add the new interval is:', output);
  // If the new interval starts after the end of the last interval appended to the output list,
  // just append the new interval to the output list.
  if (!output.length || output[output.length - 1][1] < newStart) {
    output.push(newInterval);
  }
  // Otherwise merge the two intervals
  else {
    output[output.length - 1][1] = Math.max(
      output[output.length - 1][1],
      newEnd
    );
  }

  // Copy any remaining intervals to the output list
  // Similarly merging any overlapping intervals as we go
  while (i < n) {
    let ei = existingIntervals[i];
    let start = ei[0],
      end = ei[1];

    if (output[output.length - 1][1] < start) output.push(ei);
    else
      output[output.length - 1][1] = Math.max(
        output[output.length - 1][1],
        end
      );
    i++;
  }
  console.log(
    'The output after we add new interval and merge the overlapping intervals is going to be:',
    output
  );
  return output;
}

// Driver code
function main() {
  const newIntervals = [
    [5, 7],
    [8, 9],
    [10, 12],
    [1, 3],
    [1, 10],
  ];

  const existingIntervals = [
    [
      [1, 2],
      [3, 5],
      [6, 8],
    ],
    [
      [1, 3],
      [5, 7],
      [10, 12],
    ],
    [
      [8, 10],
      [12, 15],
    ],
    [
      [5, 7],
      [8, 9],
    ],
    [[3, 5]],
  ];

  for (let i = 0; i < newIntervals.length; i++) {
    console.log('Existing intervals:', existingIntervals[i]);
    console.log('New interval: ', newIntervals[i]);
    const output = insertInterval(existingIntervals[i], newIntervals[i]);
    console.log('Updated intervals:', output);
    console.log('-'.repeat(100));
  }
}

main();

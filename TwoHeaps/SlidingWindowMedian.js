function slidingWindowMedian(nums, k) {
  // Initialize our variables => smallList, largeList, outGoingNums, medians.
  let medians = [],
    outGoingNums = {},
    smallList = new MinHeap(),
    largeList = new MinHeap();
  // Iterate over nums and add k-number of elements to our smallList
  for (let i = 0; i < k; i++) {
    smallList.offer(-1 * nums[i]);
  }
  // Remove k/2 elements from smallList and add to largeList
  for (let i = 0; i < Math.floor(k / 2); i++) {
    largeList.offer(smallList.poll() * -1);
  }
  // Initialize new variables => balance, i
  let balance = 0,
    i = k;
  // Iterate over nums:
  while (true) {
    // If k % 2 === 0: find the mean of the top 2 numbers in the heaps
    if (k % 2 === 0) {
      let result = parseFloat((smallList.peek() * -1 + largeList.peek()) / 2);
      medians.push(result);
    } else {
      // Else: add the top number from smallList as our median
      medians.push(smallList.peek() * -1);
    }

    // Check if we've reached the end of the array
    if (i >= nums.length) break;

    // Store inNum and outNum and move the sliding window forward.
    let outNum = nums[i - k];
    let inNum = nums[i];
    i += 1;

    // If outNum is from smallList => decrement balance
    if (outNum <= smallList.peek() * -1) {
      balance -= 1;
    } else {
      // Else => increment balance
      balance += 1;
    }

    // Add/Update our outNum to our outGoingNums hashmap
    if (outNum in outGoingNums) {
      outGoingNums[outNum] = outGoingNums[outNum] + 1;
    } else {
      outGoingNums[outNum] = 1;
    }

    // If the inNum is less than the top number in our smallList then add it, increment balance
    if (inNum <= smallList.peek() * -1) {
      smallList.offer(inNum * -1);
      balance += 1;
    } else {
      // Else: add it to the largeList, decrement balance
      largeList.offer(inNum);
      balance -= 1;
    }

    // Rebalance the heaps:
    // If balance < 0 => add the top number in largeList to our smallList
    if (balance < 0) {
      smallList.offer(largeList.poll() * -1);
    } else if (balance > 0) {
      // Else: do the vice versa
      largeList.offer(smallList.poll() * -1);
    }
    // set balance = 0
    balance = 0;

    // Remove the top number in smallList if it appears in our outGoingNums hashmap
    while (
      smallList.peek() * -1 in outGoingNums &&
      outGoingNums[smallList.peek() * -1] > 0
    ) {
      outGoingNums[smallList.peek() * -1] =
        outGoingNums[smallList.poll() * -1] - 1;
    }

    // Remove the top number in largeList if it appears in our outGoingNums hashmap
    while (
      largeList.size() > 0 &&
      largeList.peek() in outGoingNums &&
      outGoingNums[largeList.peek()] > 0
    ) {
      outGoingNums[largeList.peek()] = outGoingNums[largeList.poll()] - 1;
    }
  }
  // return medians
  return medians;
}

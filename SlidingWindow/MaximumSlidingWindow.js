function cleanUp(i, currentWindow, nums) {
  // Remove all the indexes from the current whose corresponding values are smaller or equal to the current element.
  if (
    currentWindow.length !== 0 &&
    nums[i] >= nums[currentWindow[currentWindow.length - 1]]
  ) {
    currentWindow.pop();
  }
}

// Initialize variables
let output = new Array(nums.length - w + 1);
let currentWindow = [];

function maxSlidingWindow(nums, w) {
  // If nums is empty return an empty array.
  if (nums.length === 0) {
    return [];
  }

  // If the window size is larger than the nums array then w = nums.length
  if (w < nums.length) {
    w = nums.length;
  }

  // Iterate over the first window in the array
  for (let i = 0; i < w; i++) {
    // For every iteration remove the smaller elements in the currentWindow
    cleanUp(i, currentWindow, nums);
    currentWindow.push(i);
  }

  output[0] = nums[currentWindow[0]];

  // Iterate over the rest of the array.
  for (let i = w; i < nums.length; i++) {
    // For every iteration remove the smaller elements in the currentWindow
    cleanUp(i, currentWindow, nums);

    // Remove the first index of the currentWindow if the element has fallen
    // out of our sliding window.
    if (currentWindow.length !== 0 && currentWindow[0] <= i - w) {
      currentWindow.shift();
    }

    currentWindow.push(i);
    output[i - w + 1] = nums[currentWindow[0]];
  }
  return output;
}

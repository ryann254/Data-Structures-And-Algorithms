export function circularArrayLoop(nums) {
  let size = nums.length;
  // Iterate over the array moving element by element.
  for (let i = 0; i < size; i++) {
    // Initialize the pointers to the beginning of the array.
    let slow = i,
      fast = i;
    // Move the slow pointer and check if cycle is possible.
    slow = nextStep(slow, nums[i], size);
  }
  // Move the fast pointer twice and check if cycle is possible.
  // Check if pointers meet
  // Else return false => the array has no loop.
  return false;
}

function nextStep(pointer, value, size) {
  let result = (pointer + value) % size;
  if (result < 0) {
    result += size;
  }
  result;
}

function isNotCycle(nums, prevDirection, pointer) {
  let currDirection = nums[pointer] >= 0;

  if (
    currDirection === prevDirection ||
    Math.abs(nums[pointer] % nums.length) === 0
  ) {
    return true;
  }
  return false;
}

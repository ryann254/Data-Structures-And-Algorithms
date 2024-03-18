function maximumAdjacentProfit(nums) {
  // Initialize the variables -> arrayLen, maximumProfit, left and right pointers.
  const arrayLen = nums.length;
  let maximumProfit = 0,
    left = 0,
    right = left + 2;
  // Iterate over the array while comparing different profits and store the maximum profit found.
  for (; right < arrayLen; right++) {
    let currentProfit = nums[left] + nums[right];
    maximumProfit = Math.max(currentProfit, maximumProfit);
    left += 1;
  }
  return maximumProfit;
}

const array1 = [2, 3, 8, 9];
const array2 = [12, 3, 7, 11];
const array3 = [0, -3, 8, 10];
const array4 = [1, 11, 2, 9];

console.log(maximumAdjacentProfit(array3));

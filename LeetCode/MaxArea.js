/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // Initialize the variables: left, right, maxWaterArea
  let left = 0,
    right = height.length - 1,
    maxWaterArea = 0;
  // Iterate over the height array while checking:
  while (left < right) {
    // For the larger pillar(height[left], height[right]) and width(right - left)
    let h = Math.min(height[left], height[right]);
    let w = right - left;
    // Calculate the area = h * w
    let area = h * w;
    // Check for the larger number(maxWaterArea, area)
    maxWaterArea = Math.max(maxWaterArea, area);
    // If (height[left] > height[right]): right--
    if (height[left] > height[right]) {
      right--;
    } else {
      // Else: left++
      left++;
    }
  }
  return maxWaterArea;
};

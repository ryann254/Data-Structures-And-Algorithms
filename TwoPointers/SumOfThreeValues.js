const SumOfThreeValues = (input, target) => {
  // Sort the array in ascending order.
  input.sort((a, b) => a - b);
  const length = input.length;

  // Loop over the array while saving the current iteration element(i) and the left and right pointers.
  for (let i = 0; i < length - 2; i++) {
    let left = i + 1;
    let right = length - 1;
    // In an inner loop, sum up the `i` and the left and right pointers
    while (left < right) {
      const triple = input[i] + input[left] + input[right];

      if (triple === target) return true;

      // If the output is higher than the target, move the right pointer to the left
      if (triple > target) right--;

      // If the output is lower than the target, move the left pointer to the right.
      if (triple < target) left++;
      i++;
    }
  }
  return false;
};

const input = [4, 8, 2, 5, 9];
const target = 255;
console.log(SumOfThreeValues(input, target));

// 1. Loop over an array while checking the current value and comparing it with the next value
// 2. If the current value is larger than the next value then we swap places.
// 3. Keep looping till all values are sorted

const BubbleSort = (data) => {
  const len = data.length;
  let swapped;
  for (let i = 0; i < len - 1; i++) {
    // The `len - i - j` is meant to avoid checking the last elements of the array after each sort. Since in Bubble Sort, the largest element is always pushed to the last position after one iteration.
    swapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (data[j] < data[j + 1]) {
        let tempValue = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tempValue;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return data;
};

const input = [3, 2, 5, 1, 4];

const sortedArray = BubbleSort(input);
console.log(sortedArray);

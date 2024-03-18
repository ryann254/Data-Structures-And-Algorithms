const InsertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

const input = [1, 33, 5, 44, 203];

const sortedArray = InsertionSort(input);
console.log(sortedArray);

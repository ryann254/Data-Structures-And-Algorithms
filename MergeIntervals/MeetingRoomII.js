class MinHeap {
  constructor(data = new Array()) {
    this.data = data;
    this.compareVal = (a, b) => a - b;
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) {
      return;
    }
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i);
    }
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  offer(value) {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.percolateDown(0);
    }
    return result;
  }

  percolateUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.compareVal(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  percolateDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;

      if (
        leftIndex <= lastIndex &&
        this.compareVal(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.compareVal(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  size() {
    return this.data.length;
  }
}

function findSets(intervals) {
  if (!intervals.length) {
    return 0;
  }
  // Initialize the min-heap to store all the end times of all intervals.
  const minHeap = new MinHeap();
  // Initialize rooms = 0;
  let rooms = 0;

  intervals.sort((a, b) => a[0] - b[0]);
  // Iterate over the intervals:
  for (let i = 0; i < intervals.length; i++) {
    // 1. If the min-heap is empty => increment rooms += 1;
    if (minHeap.size() === 0) {
      rooms++;
    } else {
      // 2. Else if the start >= smallest end time in the min-heap
      if (intervals[i][0] >= minHeap.peek()) {
        // 3. Remove the that end time from the heap
        minHeap.poll();
      } else {
        rooms++;
      }
    }
    // 4. Add our current end time to the heap
    minHeap.offer(intervals[i][1]);
  }
  return rooms;
}

console.log(
  findSets([
    [1, 2],
    [4, 6],
    [3, 4],
    [7, 8],
  ])
);

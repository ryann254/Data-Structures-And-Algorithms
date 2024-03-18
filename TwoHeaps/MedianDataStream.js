class MedianOfStream {
  constructor() {
    this.maxHeapForSmallNum = new MinHeap();
    this.minHeapForLargeNum = new MinHeap();
  }

  inSertNum(num) {
    // If the max-heap is empty or the largest number in the
    // max-heap is greater than num then add it to our max-heap
    if (
      this.maxHeapForSmallNum.size() === 0 ||
      -1 * this.maxHeapForSmallNum.peek() >= num
    ) {
      // negate the number when adding.
      this.maxHeapForSmallNum.offer(-1 * num);
    } else {
      // Else add it to the min-heap
      this.minHeapForLargeNum(num);
    }

    // If the max-heap length is greater than the min-heap length
    // + 1, then pop the largest number from the max-heap and add
    // it to the min-heap
    if (this.maxHeapForSmallNum.size() > this.minHeapForLargeNum.size() + 1) {
      this.minHeapForLargeNum.offer(-1 * this.maxHeapForSmallNum.poll());
    } else if (
      this.minHeapForLargeNum.size() > this.maxHeapForSmallNum.size()
    ) {
      // Else if the min-heap is larger than the max-heap then do the vice versa
      this.maxHeapForSmallNum.offer(-1 * this.minHeapForLargeNum.poll());
    }
  }

  findMedian() {
    // If the length of both heaps is the same then, add the two
    // top numbers and divide by two
    if (this.maxHeapForSmallNum.size() === this.minHeapForLargeNum.size()) {
      return (
        (-1 * this.maxHeapForSmallNum.peek()) / 2 +
        this.minHeapForLargeNum.peek() / 2
      );
    }
    // Else return the top number in the max-heap
    return -1 * this.maxHeapForSmallNum.peek();
  }
}

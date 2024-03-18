function mergeSortedArray(nums1, m, nums2, n) {
  // Initialize pointers => p1, p2, p.
  let p1 = m - 1,
    p2 = n - 1;
  // Iterate over nums1 and nums2 repectively:
  for (let p = m + n - 1; p > -1; p--) {
    // If p2 < 0 => break;
    if (p2 < 0) break;
    // If p1 > p2 then p = p1 => decrement p1 and p
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1 -= 1;
    } else {
      // Else if p1 < p2 then p = p2 => decrement p2 and p
      nums1[p] = nums2[p2];
      p2 -= 1;
    }
  }
  // return nums1
  return nums1;
}

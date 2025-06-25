var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

  let m = nums1.length,
    n = nums2.length;
  let low = 0,
    high = m;

  while (low <= high) {
    let i = (low + high) >> 1; // bitwise floor divide by 2
    let j = ((m + n + 1) >> 1) - i;

    let maxLeftA = i ? nums1[i - 1] : -Infinity;
    let minRightA = i < m ? nums1[i] : Infinity;

    let maxLeftB = j ? nums2[j - 1] : -Infinity;
    let minRightB = j < n ? nums2[j] : Infinity;

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        );
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      high = i - 1;
    } else {
      low = i + 1;
    }
  }
};
console.log(findMedianSortedArrays([1, 2], [3])); //2
console.log(findMedianSortedArrays([2, 3], [7, 8])); //5
console.log(findMedianSortedArrays([4, 17, 98, 131], [7, 8, 21])); //17

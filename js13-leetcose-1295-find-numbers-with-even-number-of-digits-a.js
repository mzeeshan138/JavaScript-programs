/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let num of nums) {
    // Fast digit‑count via string conversion:
    //   toString() is linear in # of digits, but nums[i] ≤ 10^5 so at most 6 chars.
    if ((num.toString().length & 1) === 0) {
      count++;
    }
  }
  return count;
};
console.log(findNumbers([12, 345, 2, 6, 7896])); //2
console.log(findNumbers([555, 901, 482, 1771])); //1

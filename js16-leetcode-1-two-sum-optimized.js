/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Map from number → its index in nums
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // Have we already seen the complement?
    if (seen.has(complement)) {
      // Yes: return [index of complement, current index]
      return [seen.get(complement), i];
    }
    // Otherwise, record this number and its index
    seen.set(nums[i], i);
  }

  // Problem guarantees exactly one solution, so we should never reach here
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]

//overall time is O(n), with O(n) extra space for the map

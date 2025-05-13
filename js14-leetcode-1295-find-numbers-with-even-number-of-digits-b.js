/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let num of nums) {
    let digits = 0,
      x = num;
    while (x > 0) {
      digits++;
      x = Math.floor(x / 10);
    }
    if ((digits & 1) === 0) {
      count++;
    }
  }
  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896])); //2
console.log(findNumbers([555, 901, 482, 1771])); //1

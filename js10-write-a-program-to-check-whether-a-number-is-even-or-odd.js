function isEvenOrOdd(num) {
    if (num % 2 == 0) return `${num} is even`;
    return `${num} is odd`;
}
console.log(isEvenOrOdd(1)); //odd
console.log(isEvenOrOdd(3)); //odd
console.log(isEvenOrOdd(41)); //odd
console.log(isEvenOrOdd(8)); //even
console.log(isEvenOrOdd(46)); //even

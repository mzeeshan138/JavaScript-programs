function countDigits(num) {
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(countDigits(123456)); // Output: 6
console.log(countDigits(7897866)); // Output: 7

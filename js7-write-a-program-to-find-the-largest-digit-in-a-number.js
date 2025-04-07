function largestDigit(num) {
    let maxDigit = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit > maxDigit) {
            maxDigit = digit;
        }
        num = Math.floor(num / 10);
    }
    return maxDigit;
}

console.log(largestDigit(58724)); // Output: 8
console.log(largestDigit(9483)); // Output: 9

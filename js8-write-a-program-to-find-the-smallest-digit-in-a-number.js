function smallestDigit(num) {
    let minDigit = 9;
    while (num > 0) {
        let digit = num % 10;
        if (digit < minDigit) {
            minDigit = digit;
        }
        num = Math.floor(num / 10);
    }
    return minDigit;
}

console.log(smallestDigit(58724)); // Output: 2
console.log(smallestDigit(9483)); // Output: 3

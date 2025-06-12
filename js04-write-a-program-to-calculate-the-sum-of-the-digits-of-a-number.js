function sumOfDigits(num) {
    let sum = 0;
    let digit = 0;
    // while (num > 0) {
    //     sum += num % 10; // Extract last digit and add to sum
    //     num = Math.floor(num / 10); // Remove last digit
    // }
    while (num > 0) {
        digit = num % 10; // Extract last digit
        sum += digit; //  add last digit to sum
        num = Math.floor(num / 10); // Remove last digit
    }

    return sum;
}

console.log(sumOfDigits(12345)); // Output: 15
console.log(sumOfDigits(8976)); // Output: 30

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return `${num} is not a prime number`;
    }
    //return true
    return `${num} is a prime number`;
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(3)); // Output: true
console.log(isPrime(41)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(64)); // Output: false

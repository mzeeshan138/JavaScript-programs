function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year`;
    }
    return `${year} is not a leap year`;
}

console.log(isLeapYear(2024)); //leap year
console.log(isLeapYear(2025)); //not a leap year
console.log(isLeapYear(200)); //not a leap year
console.log(isLeapYear(100)); //not a leap year
console.log(isLeapYear(400)); //leap year

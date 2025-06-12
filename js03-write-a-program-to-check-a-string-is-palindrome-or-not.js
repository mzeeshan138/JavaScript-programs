// A palindrome is a word, phrase, number, or sequence that reads the same forward and backward.
// Examples of Palindrome Words: mom, civic, radar, level, racecar
// Examples of Palindrome Numbers: 11, 121, 1221

function checkPalindrome(str) {
    const length = str.length;
    let rev = '';

    /* 1st way */
    for (i = length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev !== str) {
        return false;
    }
    return true;

    /* 2nd way */
    // for (i = length - 1; i >= 0; i--) {
    //     rev += str[i];
    // }
    // return rev === str; // Directly return comparison result
}

console.log(checkPalindrome('mom')); //true
console.log(checkPalindrome('world')); //false
console.log(checkPalindrome('radar')); //true
console.log(checkPalindrome('121')); //true
console.log(checkPalindrome('moon')); //false

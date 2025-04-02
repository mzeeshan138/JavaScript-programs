function revString(str) {
    const len = str.length;
    let rev = '';
    for (i = len - 1; i >= 0; i--) {
        rev += str[i];
        //rev = rev + str[i];
    }
    return rev;
}

let str = 'Hello World!';

console.log(revString(str)); //!dlroW olleH
console.log(revString('javascript')); //tpircsavaj

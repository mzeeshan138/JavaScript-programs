const str = 'Hello World!';
const len = str.length; //12
let rev = '';

for (i = len - 1; i >= 0; i--) {
    rev += str[i];
    //rev = rev + str[i];
}

console.log(str); //Hello World!
console.log(rev); //!dlroW olleH

function compareArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (i = 0; i <= arr1.length - 1; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
//Array
console.log(compareArray([0, 1, 2, 3], [0, 1, 2, 3])); //true
console.log(compareArray(['h', 'i'], ['h', 'i'])); //true
console.log(compareArray([0, 1, 2, 3], [0, 1, 2])); //false
console.log(compareArray([0, 1, 2, 3], [0, 1, 'a', 3])); //false
//String
console.log(compareArray('Hello World', 'Hello World')); //true
console.log(compareArray('Hello', 'World')); //false

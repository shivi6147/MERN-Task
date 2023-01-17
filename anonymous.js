// Anonymous Function
//Question:

// 1. Print odd number in an array ?

function oddNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(oddNumber(arr));


// 2. Convert all the strings to title caps in a string array ?

let str = ["Lorem ipsum dolor sit amet consectetur adipisicing elit repellendus quasi soluta maxime"];

function titleCapStr(str) {
    let arr = str[0].split(" ");
    let newStr = "";

    for (let i = 0; i < arr.length; i++) {
        let s = arr[i].toString();
        newStr += `${s[0].toUpperCase()}${s.slice(1)} `
    }
    return newStr;
}

console.log(titleCapStr(str));


// 3. Sum of all numbers in an array ?

function sumOfArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfArr(arr));


// 4. Return all the prime numbers in an array?

var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
let newArray = [];

function checkPrime(number) {
    if (number === 1) {
        return true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i]) === true) {
        newArray.push(arr[i]);
    }
}

console.log(newArray);


// 5. Return all the palindromes in an array ?

var arr = ["abc", "car", "ada", "racecar", "cool", "madam"];
let newArr = [];

function checkPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        let revStr = arr[i].split("").reverse().join("");
        if (arr[i] === revStr) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(checkPalindrome(arr));


// 6. Return median of two sorted arrays of the same size ?

function medianOfTwoArr(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }

    let median = 0;
    if (newArr.length % 2 === 0) {
        median = (newArr[(newArr.length) / 2 - 1] + newArr[(newArr.length) / 2]) / 2;
    } else {
        median = (newArr[Math.floor((newArr.length) / 2)]) / 2;
    }

    return median;
}

console.log(medianOfTwoArr([1, 4, 5, 6, 10], [2, 3, 4, 5, 7]));


// 7. Remove duplicates from an array ?

function removeDuplicate(arr) {
    let newArr = [];
    arr.forEach(x => {
        if (!newArr.includes(x)) {
            newArr.push(x);
        }
    });
    return newArr;
}

console.log(removeDuplicate([1, 2, 5, 2, 1, , 5, 6, 7, 8, 1, 8]));


// 8. Rotate an array by k times ?

function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
        let temp = arr[0];
        for (let j = 0; j < arr.length; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = temp;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
let k = 2;

console.log(rotateArray(arr, k));


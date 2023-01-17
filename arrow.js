// Arrow Function
//Question:

// 1. Print odd number in an array ?

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var oddArr = arr.filter(x => (x % 2 === 1));
console.log(oddArr);


// 2. Convert all the strings to title caps in a string array

let str = ["Lorem ipsum dolor sit amet consectetur adipisicing elit repellendus quasi soluta maxime"];

let arr = str[0].split(" ");
let newStr = "";

arr.forEach((ele) => {
    let s = ele.toString();
    newStr += `${s[0].toUpperCase()}${s.slice(1)} `
});

console.log(newStr);


// 3. Sum of all numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sumOfArr = 0;

arr.forEach((x) => sumOfArr += x);

console.log(sumOfArr);


// 4. Return all the prime numbers in an array?

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]

numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number === 1) return true;
        else {
            if (number % i === 0) return false;
        }
    }
    return true;
});

console.log(numArray);


// 5. Return all the palindromes in an array

var arr = ["abc", "car", "ada", "racecar", "cool", "madam"];
let newArr = [];

arr.forEach(ele => {
    let revStr = ele.split("").reverse().join("");
    if (ele === revStr) {
        newArr.push(ele);
    }
});

console.log(newArr);
// Problem 1:  Find Common Characters Between Two Strings
// Description: Write a program that checks how many characters are common between two strings, without using new Set, and  function.
// Example
// // Given strings

const str1 = "react";
const str2 = "redux";
let commonCount = 0; 
let checkedChars = '';
let i = 0;


for(let i = 0; i < str1.length; i++ ){
    if (str1.includes(str2[i]) || str2.includes(str1[i])){
        commonCount ++;
        checkedChars += str1;
    }
}

console.log(commonCount);

// let char0 = str1.charAt(0)
// let char1 = str1.charAt(1)
// let char2 = str1.charAt(2)
// let char3 = str1.charAt(3)
// let char4 = str1.charAt(4)

// // console.log(char0, char1, char2, char3, char4);

// let char00 = str2.charAt(0)
// let char01 = str2.charAt(1)
// let char02 = str2.charAt(2)
// let char03 = str2.charAt(3)
// let char04 = str2.charAt(4)

// // console.log(char00, char01, char02, char03, char04);

// if (char0 === char00 || char0 === char01 || char0 === char02 || char0 === char03 || char0 === char04){
//     console.log(commonCount + '1')
// } else if(char1 === char00 || char0 === char01 || char0 === char02 || char0 === char03 || char0 === char04){
//     console.log(commonCount + '1')
// } else if (char2 === char00 || char0 === char01 || char0 === char02 || char0 === char03 || char0 === char04){
//     console.log(commonCount + '1')
// } if (char3 === char00 || char0 === char01 || char0 === char02 || char0 === char03 || char0 === char04){
//     console.log(commonCount + '1')
// } 

// if (char4 === char00 || char0 === char01 || char0 === char02 || char0 === char03 || char0 === char04){
//     console.log(commonCount + '1')
// } 


// Expected Output
2 // Because the strings "react" and "redux" share the characters 'r' and 'e'

// let text = "HELLO WORLD";
// let char = text.charAt(0);

// console.log(char);
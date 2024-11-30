// const arr = [9, 2, 7, 4]; 
// const result = [];

// let min = arr[0];
// let max = arr[0];

// for(i = 1; i < arr.length; i++){
//     let item = arr[i];
//     if(item < min){
//         min = item
//     } 

//     if (item > max){
//         max = item
//     }
// }

// console.log(min, 'min value');
// console.log(max, 'max value');

// for(let i = min; i < max; i++){
//     if(!arr.includes(i)){
//         result.push(i);
//     }
// }

// console.log(result, 'result');

// __________________________________________________________________________________________________________

// const arr = ["React", "JavaScript", "Redux", "PHP", "C#"];
// let longItem = arr[0];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i].length > longItem.length){
//         longItem = arr[i];
//     }
// }
// console.log(longItem, '>>>');



// __________________________________________________________________________________________________________

// Problem 1: Student Grades
// Description:
// You are provided with an array of students, where each student is represented as an object. Each object contains the student’s name and their score. Your task is to determine the grade status of each student using a for loop and a switch statement.
// The grade categories are as follows:
// i >= 90 → “Excellent”
// i >= 75 → “Good”
// i >= 50 → “Pass”
// default → “Fail”
// Data example
// const students = [
//   { name: "Anna", grade: 85 },
//   { name: "Mariam", grade: 92 },
//   { name: "Olivia", grade: 76 },
//   { name: "Emma", grade: 59 },
// ];


// const students = [
//     { name: "Anna", grade: 85 },
//     { name: "Mariam", grade: 92 },
//     { name: "Olivia", grade: 76 },
//     { name: "Emma", grade: 59 },
//   ]; 

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
    
//     switch (true) {
//       case (student.grade >= 90):
//         console.log(`${student.name}: Excellent`);
//         break;
//       case (student.grade >= 75):
//         console.log(`${student.name}: Good`);
//         break;
//       case (student.grade >= 50):
//         console.log(`${student.name}: Pass`);
//         break;
//       default:
//         console.log(`${student.name}: Fail`);
//     }
//   }



// __________________________________________________________________________________________________________


import { CARS } from "./cars.js";
import { STUDENTS } from "./students.js";

const safeCars = [];
const speedingCars = [];

for(let = 0; i < CARS.length; i++){
    if(CARS[i].speed >= 120){
        speedingCars.push(CARS[i]);
    } else {
        safeCars.push(CARS[i]);
    }
}

console.log(safeCars, 'safeCars');
console.log(speedingCars, 'speedingCars');
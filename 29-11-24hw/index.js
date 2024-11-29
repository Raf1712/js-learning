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


const students = [
  { name: "Anna", grade: 85 },
  { name: "Mariam", grade: 92 },
  { name: "Olivia", grade: 76 },
  { name: "Emma", grade: 59 },
]; 

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  
  switch (true) {
    case (student.grade >= 90):
      console.log(`${student.name}: Excellent`);
      break;
    case (student.grade >= 75):
      console.log(`${student.name}: Good`);
      break;
    case (student.grade >= 50):
      console.log(`${student.name}: Pass`);
      break;
    default:
      console.log(`${student.name}: Fail`);
  }
}



  
  







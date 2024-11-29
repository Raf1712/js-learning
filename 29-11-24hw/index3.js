// Problem 3: Employee Departments
// Description:
// You are given an array of employees, where each employee has a name and a department. Your task is to determine how many employees work in each department.

const employees = [
    { name: "Karen", department: "HR" },
    { name: "John", department: "IT" },
    { name: "Margarita", department: "HR" },
    { name: "Aram", department: "Finance" },
    { name: "Nina", department: "IT" }
];

const departmentCount = {};
const hrDep = {};
const itDep = {};
const financeDep = {};


for(i = 0; i < employees.length; i++){
    const employee = employees[i];
    if(employee.department = 'HR'){
        console.log(employee.name + ' is working as HR specialist');
    } else if (employee.department = 'IT') {
        console.log(employee.name + ' is working as IT specialis');
    } else if (employee.department = 'Finance') {
        console.log(employee.name + ' is working as Finance specialist');
    } else {
        console.log(' Write a correct profession name');
    }
}


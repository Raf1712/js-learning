//homework 5

var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /):");
var output;

switch(operation){
    case '+': output = num1 + num2; break;
    case '-': output = num1 - num2; break;
    case '*': output = num1 * num2; break;
    case '/': output = num1 / num2; break;
        if(num2 !== 0){
            output = num1 / num2;
        } else {
            output = 'zero value';
        }
    default: output = 'Invalid value';
}

console.log(output);

//homework 4

var day = prompt('Input day');
day = day.toLocaleLowerCase();
var translatedDay;

switch(day){
    case 'monday': translatedDay = 'Երկուշաբթի'; break;
    default: translatedDay = 'wrong day';
}

console.log(translatedDay)


//homework 3

var month = +prompt('Write month number');
var output;

if (monthNumber === '12' || monthNumber === '1' || monthNumber === '2'){
    alert('Winter');
} else if (monthNumber === '3' || monthNumber === '4' || monthNumber === '5'){
    alert('Spring');
} else if (monthNumber === '6' || monthNumber === '7' || monthNumber === '8'){
    alert('Summer')
} else if(monthNumber === '9' || monthNumber === '10' || monthNumber === '11'){
    alert('Autumn');
} else {
    alert('Not valid number of month')
}

console.log(output)


//homework 2

var number = +prompt('Write a number');

if (number % 2 === 0){
    console.log ('Even number');
} else {
    console.log ('Odd number');
}


//homework1



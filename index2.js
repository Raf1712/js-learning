//22.11homework num 1

let n = 5;

for(; i <= 10; i++) {
    console.log (`${n} * ${i} = ${n * i});
    }


//homework 2

let sentence = "I am learning JavaScript";
let result = "";

for(i = 0; i < sentence.lenght; i ++){
        if (sentence[i] == " " ){
        result += "-";
        else {
        result += sentence[i];
        }
        }
}

console.log(result);
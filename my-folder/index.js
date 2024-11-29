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

const arr = ["React", "JavaScript", "Redux", "PHP", "C#"];
let longItem = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i].length > longItem.length){
        longItem = arr[i];
    }
}
console.log(longItem, '>>>');
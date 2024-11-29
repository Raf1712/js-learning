// let count = 0

// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     isAvtive: true, 
//     price: 6000000,
//     length: 0

// }
// //firstName: John
// //lastName: Smith


// // console.log(user['firstName']); // [] is better to use [i]- i keys
// // console.log(user.lastName);

// for(let i in user){
//     if (i !== 'length' && i !== 'price'){
//     // console.log(`${i} : ${user[i]}`) // i-firstName, lastName ... 
//     user.length = user.length + 1;
//     }
// }

// console.log(user)


// console.log('---------------------------------------')


// const obj = {
//     x: 10,
// };  //literal

// // const arr = ['React', 'Node', 'JS', 1 , 2 , false , NaN];
// // // console.log(arr[2] + ' arr') // JS arr
// // console.log(arr.length)

// const skills = ['HTML', 'CSS'];
// skills[2] = 'JS';

// console.log(skills)

// delete skills[1];

//------------------------------------------------------------------------------

// skills.push('JS', 'React'); //1 method avelacnume verjic

// skills.pop(); //2 method jnjume verjic 

// skills.unshift('JS' , 'React'); //3 method avelacnume skzbic

// skills.shift('JS', 'React'); //4 method pakasecnume skzbic

// console.log(skills);


//------------------------------------------------------------------------------
//interview task below

// const arr = ['Hello', 3, '2', NaN, false,  {}, true, 99, 'JS', [], null]; 

// const str = [];
// const num = [];
// const boo = [];
// const objects = [];

// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'string'){
//         str.push(arr[i]);
//     } else if(typeof arr[i] === 'number' && !isNaN(arr[i])){
//         num.push(arr[i]);
//     } else if(typeof arr[i] === 'boolean'){
//         boo.push(arr[i]);
//     } else if(typeof arr[i] === 'object' && arr[i] !== null){
//         objects.push(arr[i]);
//     }
// }



// console.log(str, '');
// console.log(num, '');
// console.log(boo, '');
// console.log(objects, '');

//--------------------------------------------------------------------------------------
//interview task below

// const arr = [3, 99, 1, 4];
// let min = arr[0];
// let max = arr[0];
// let count = 0; //stufumenq qani angam frac 

// for(let i = 0; i < arr.length; i++){
//     count ++ //stufumenq qani angam frac 
//     if(arr[i] > max){
//         max = arr[i];
    
//     }

//     if(arr[i] < min){
//         min = arr[i];
//     }
// }

// console.log(count);
// console.log(min, 'min value');
// console.log(max, 'max value');


//--------------------------------------------------------------------------------------

// const arr = [1, 2, 3, 4];
// const str = 'JavaScript';

// console.log(arr.reverse()); //shrjum e hertakanutyuny(ajic dzax)
// console.log(arr.join()); // array sarquma string
// console.log(arr.join(-)); // arrayi mejtexy - ner
// console.log(arr.split()); // arrayi andamnery arandznacnuma

// const strArr = []

// for(let i = 0; i < str.length; i++){
//     strArr.push(str[i]);
// }

// console.log(strArr)


//--------------------------------------------------------------------------------------


// const palindromName = 'Anna';
// const rv = palindromName.split('').reverse().join.toLowerCase() === palidromName.toLowerCase

// const splitData = palindromName.split('');
// const reverseData = splitData.reverse('');
// const joinData = reverseData.join('');

// // console.log(joinData)
// // console.log(reverseData)
// // console.log(splitData)
// console.log(joinData.toLowerCase() === palindromName.toLocaleLowerCase())


//----------------------------------------------------------------------------------------------------------------------------

// split-zangvacy sarquma string
// reverce - original zangvacy hayelayin shrjuma
// push - verjic elementnera avelacnum
// pop - ?
// unshift - skzbic elementa avelacnum
// shift - skzbic elementa heracnum
// join - 
// 


//----------------------------------------------------------------------------------------------------------------------------


const obj1 = {
    x: 10,
    y: 20,
    z: 30
}

const obj2 = {

}

for(let i in obj1){
    obj2[i] = obj1[i];
}

obj2.x = 111
obj2.y = 222
obj2.z = 333

console.log(obj2)
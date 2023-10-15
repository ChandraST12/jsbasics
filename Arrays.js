/*declaring arrays in js
var arr1 = [5, 3, 9, 6, 8];
const cartoons =["bheem","oggy","doreamon"] ;

console.log("array",arr1)  //[5, 3, 9, 6, 8
//accessing array elements using index
console.log(`first element of the array is ${arr1[0]}`);

console.log(cartoons);*/

//methods of array
 const myArray =new Array(1,2,3,4,5);
// myArray.push(7); // add elemnt in last 
// myArray.pop();
// myArray.unshift(9); 
// myArray.shift();
// console.log('after adding an item',myArray );
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(4));


// const newArr = myArray.join("*");
// console.log(myArray);
// console.log(newArr);

//slice , splice
// console.log("A",myArray);
// const myn1= myArray.slice(1,3);
// console.log(myn1);
// console.log("B",myArray);

// const myn2= myArray.splice(1,3);
// console.log(myn2);
// console.log("c",myArray);
//output
/* A [ 1, 2, 3, 4, 5 ]
[ 2, 3 ]
B [ 1, 2, 3, 4, 5 ]
[ 2, 3, 4 ]        
c [ 1, 5 ]
*/

// const arr1 =[1,2,3,4]
// const arr2 = [5,6,7,8]
// // arr1.push(arr2);
// console.log(arr1); //[ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]

// // const arr3 = arr1.concat(arr2);
// // console.log(arr3);//[ 1, 2, 3, 4, 5, 6, 7,8]
// const arr4 =[...arr1,...arr2];
// console.log(arr4);

const arr5 =[1,2,3, [4,5,6],[7,8,[9,10],13],11,12,13];
const arr6 =arr5.flat(Infinity);
console.log(arr6);
/*[
    1,  2, 3,  4,  5,  6,
    7,  8, 9, 10, 13, 11,
   12, 13
 ]*/

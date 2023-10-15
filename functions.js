/* function having name => named function 
function without name=> anonymous function

 */



// function myName(){
//     console.log("chandra");
// }

// myName()

//function declaration  type 1   (function statement)
// let answer = sum( 2, 4);  //function call before declaration allowed
// console.log(answer);
// function sum(number1 , number2){
//     let result = number1 + number2;
//    console.log("console inside function", result);
//    return result;
// }

// let answer = sum( 3, 4);  //function call
// console.log(answer);
// number1 , number2 => parameters
// 3 ,4 => arguments 

// function calculatePrice(...num1){
//  return num1;
// }

// function calculatePrice(val1,val2,...num1){
//     return num1;
// }
// //...  is rest operator
// console.log(calculatePrice(100,2000,400,90));

// const user={
//    username:"hitesh",
//    price:199 
   
// };

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user);
// handleObject({
//     name:'hitesh',
//     price:300
// });


// const arr = [200,300,400,500];

// function returnValue(getArray){ 
//     return getArray[1];
// }

// console.log(returnValue(arr));

// 2nd way to function declaration =>(function expression)
// console.log(addtwo(5)); // not allowed
// const addtwo = function(num){
//     return num+2;
// }
// console.log(addtwo(5));

// //////arrow function  & this keyword

// const user={
//    username:"hitesh",
//    price:199,
//    welcomeMessage: function(){
//     console.log(`${this.username},welcome to deep dve into js`);
//    } 
   
// };
// user.welcomeMessage();

// function chai(){
//     let username = "hitesh";
//     console.log(this.username);

// }
// chai();

// const chai = function(){
//        let username = "hitesh";
//     console.log(this.username); 
// }
// chai();


// const chai = ()=>{
//     let username = "hitesh";
//  console.log(this.username); 
// }
// chai();


// const addtwo =(num1,num2)=>{
//     return num1 +num2;
// }

// console.log(addtwo(3,4));



//implicit return arrow function
// const addtwo =(num1,num2)=> num1 +num2;
//          or
// const addtwo =(num1,num2)=> (num1 +num2);
// const addtwo = (num1 , num2)=> ({username:"hitesh"})

// console.log(addtwo(3,4));


// about this keyword
// this keyword always refers to an object.
// console.log(this);



//////////////////////// Immediately Invoked Function Expressions  (IIFE)
// to remove polution of global scope from function call we use IIFE

//simple iife
// (() => {
//     console.log('Welcome to Hitesh\'s website!');
//     })();

  //named iife
// (function chai(){
//     console.log(`dbconnected`);
// })(); 

// ; semicolon is important to end iife when writting two iffe function 

// (()=>console.log("welcome"))();

//  ((name) => {
//         console.log(`welcome to ${name} function `);
//         })('IIFE');
    
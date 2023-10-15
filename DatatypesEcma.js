"use strict"; //treate all js code as newer version

// alert("hello");  // we are useing nodejs not browser

/*documentaion 
  1.mdn
  2.tc39  */


  //datatypes in js
   let name = "sagar";   /*string*/   
   let age=40;     /*number*/
   let isMarried=true;//boolean
   let x,y ;      //undefined
   let z=null;       //object
                  //    Symbol
                  //null
                  
//type conversion 

let score="33"
let scores ="33abc"
// both console log sytax are same

// console.log(typeof(score)); 
// console.log(typeof scores);

   let valueInNumber = Number(score);
  //  console.log( valueInNumber);
  //  console.log(typeof valueInNumber);
  

   let valueInscores = Number(scores);
  //  console.log( valueInscores);
  //  console.log(typeof valueInscores);

  //  "33" => 33
  // "33abc" => NaN
  // Null =>0 
  // undefined => NaN
  // true => 1; false=>0
  // 1=>true ; 0=>false
  // ""=> false
  // "chandra"=>true

  /*functions
      Number()
      String()
      Boolean()
  */

      //   operation  
  

      // this type of coversion is bad practice 
      // console.log("1"+2);  //12
      // console.log(1+"2");  //12
      // console.log("1"+2+2); //122
      // console.log(1+2+"2"); //32
      //  console.log(true);//true
      //  console.log(+true);//1
      //  console.log(+"");//0
 let num1, num2 ,num3 ;
 num1= num2 = num3 =2+2;  //valid but not good way

 let gameCounter =100
   let postcounter =gameCounter++; //first store 100 in postcounter then increment ingame counter
   console.log(postcounter);//100
   console.log (gameCounter); //101 //now game counter is 101
 let precounter = ++gameCounter;  // first increment game countr to 102 and then store in precounter
 console.log(precounter);//102

 //conparison operators
//  == (Equality Operator):
// === (Strict Equality Operator):
// != (Inequality Operator):
// !== (Strict Inequality Operator):
// > , >= , < , <= 
// 
/*Primitive Data Type (stack memory => Call by Value ) => 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt. 
1) The data type of null is an object.
2) The data type of String is a string.
3) The data type of Boolean is Boolean.
4) The data type of Undefined is undefined.
5) The data type of Symbol is a symbol.
6) The data type of Number is number.
7) The data type of BigInt is BigInt.

And the Data Types of Non primitive data type (heap memory => call by refrence)  is Function object.
array, object , function */


const heroes = ["shaktiman", "nagraj", "bheem"];
console.log(heroes[0]);
let myObj ={
  name:"chandra",
  age :22,
}

const myFunction = function(){
  console.log("i'm a function");
}



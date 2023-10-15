// global execution context 
// function execution context 
// eval execution context



// js code execution 
// phase 1 => memory creation phase 
// phase 2 => execution phase or initialization phase (variable declaration)
 
// scope chain => chain of lexical enviroment
// lexical enviroment => local enviroment of variable + lexical enviroment of parent 
// global's parent lexical enviroment is NULL 

 /* taking a code for understanding */
/*
let val1 =10;
let val2 =5;
function sum(num1, num2){
    let total = num1 +num2;
    return total;
} 
let result1 = sum(val1,val2);
let result2 = sum(4,5);
 */



//memory phase
/* 
val1 -> undefined
val2 ->undefined
sum -> definition ----------->[]

result1 -> undefined
result2 -> undefined
*/



//execution phase 
/*
val1 <- 10
val2 <- 5
sum ->      [       new variable enviroment  + executio thread ]*/
  //                                       ||
            // memory phase                     // execution phase 
            // val1 -> undefined                 //num1 <- 10
            // val2 -> undefined                 // num2 <-5
            // total -> undefined                //total <- 15
                                          // total will be returned to global execution context
                                        // then global excution context will be deleted 
// result1 <-15
// now for result 2 

// sum ->      [       new variable enviroment  + executio thread ]*/
  //                                       ||
            // memory phase                     // execution phase 
            // val1 -> undefined                 //num1 <- 4
            // val2 -> undefined                 // num2 <-5
            // total -> undefined                //total <- 9
                                          // total will be returned to global execution context
                                        // then global excution context will be deleted 
// result2 <- 9








// ///////////////// CALL STACK 
// |_________|
// |_________|
// |_________|
// |_________|
// |_________|
// |_________|
// |_________|
// |__sum()__|   
// |___GEC___|

// works on lifo -> last in first out




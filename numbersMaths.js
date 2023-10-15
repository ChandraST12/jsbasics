/*const score =400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber =123.8966;
console.log(otherNumber.toFixed()); //without decimal places
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));*/
/*


  // Maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(3.89777455)); // only integer
console.log(Math.random());  // value between 0 and 1 
console.log((Math.random()*10)+1); // value between 1&9
console.log(Math.floor((Math.random()*10)+1)); //integer value between 1&9

const min =20;
const max= 30;
console.log(Math.floor((Math.random()* (max-min + 1 ) ))+ min); //integer value between min and max range given in variable 
*/

//Date & Time 
let today =new Date();
// console.log(today); //2023-10-12T03:50:26.109Z
// console.log(today.toString());//2023-10-12T03:51:18.846Z
// console.log(today.toJSON());//2023-10-12T03:53:00.816Z
// console.log(today.toLocaleString());//12/10/2023, 9:23:00 am
// console.log(today.toISOString());//2023-10-12T03:58:00.653Z

// let birthday='2002-09-23';
// const birthdate = new Date (birthday) ;   
// console.log(`You were born on ${birthdate}`);

// let myCreatedDate =new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());
// //for more go to mdn
// https://github.com/hiteshchoudhary/js-hindi-youtube


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
//output
// 2023-10-12T04:20:02.795Z
// 9   
// 4   
// 2023
// 0 for sunday - 6 for saturday
// month count in js starts with 0

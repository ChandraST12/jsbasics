const accountId =144553
let accountEmail =" hitesh@google.com"
var accountPassword ="12345"
accountCity ="jaipur"
let accountState;
// accountState will be undefined 
// ; is optional in js 
// modifying const value is not  allowed 
//  let and var can be modified 

console.log(accountId);

/* prefer not to use var 
because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState ])
// console.table will give output in the form of table 
// node filename.js    to run the code in terminal


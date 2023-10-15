const gameName = new String('chandra');
console.log(gameName); // Output: chandra
console.log(gameName[0]);//Output: c
console.log(gameName.length);

const name ="nikita";
const repoCount =50;
// console.log(`hello my name is${name} and my repo count is ${repoCount}`);
/*
* 1. The length property returns the number of characters in a string, not including white space or other invisible characters such as line breaks and tabs
In JavaScript, a string is an array of characters. Hence we can access the individual
characters in the string using their index as shown above (i.e., gameName[index]).
The length property returns the number of characters in the string.
*/

/* there are many methods in string .some common prototypes of strings are 
* 1) charAt() - Returns character at specified position
* 2) concat()- Joins two or more strings and return resultant value into one single string
* 3) indexOf() - Searches for first occurrence of substring within another string
* 4) lastIndexOf() - Searches for last occurrence of substring within another string
* 5) match() - Executes search on a string with regular expression pattern and returns matching results
* 6) replace() - Replaces text found inside a string based on a regex pattern to some other text/string
* 7) split() - Splits a string object into an array of substrings
* 8) slice() - Extract part of a string and return it as a new string
* 9) substr() - Extracts parts of a string and returns the extracted parts
* 10) substring() - Extract parts of a string and returns the extracted parts
* 11) trim() - Removes whitespace from both ends of a string */

// eamples 
let str = 'Hello world';
console.log(str.charAt(4)); // Output: o
console.log(str.concat("hello", "world")); // Output:helloworld
console.log(str + " hello" + " world"); // Output: Hello world hello world
console.log(str.indexOf("o")); // Output: 4
console.log(str.lastIndexOf("l")) ; // Output : 11
console.log(str.replace(/r/, 'p'));     // Output: Hellpp ppld
console.log(str.split(" "));      // Output: ['Hello', 'world']
console.log(str.slice(-5,-1));       // Output: llo w
console.log(str.substring(1,5));     // Output: ello
console.log("   Hello World!  ".trim()); // Output: Hello World!

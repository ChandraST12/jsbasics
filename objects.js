//object literals

// const mySym=Symbol("key1")
// const user ={
//     name:"chandra",
//     "full name":"chandra thakran",
//     [mySym] : "mykey1",
//     age:18,
//     location : "jaipur",
//     email:"cs@gmail.com",
//     isLoggedin:false

// }

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);
 
// user.email ="chandra@gmail.com"
// console.log(user);

// Object.freeze(user)
// user.email="nikita@gmail.com"
// console.log(user);


// user.greeting = function(){
//     console.log("hello js user");
// }

// user.greetingtwo = function(){
//     console.log(`hi ${this.name}`);  // this keyword refers to the object itself
// }

//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id= "123abc"
tinderUser.name="saumya"
tinderUser.isLoggedin =false;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedin'));

// const regularUser ={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstName:"chandra",
//             lastName:"thakran"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstName);



// const obj1 ={1:"a",2:"b"};
// const obj2 ={3:"c",4:"d"};

// // console.log({...obj1,...obj2});
// const obj3 =Object.assign({},obj1,obj2);
// console.log(obj3); 


/*object destructuring and json*/
let person={
    firstname: 'Chandrachandra',
    lastname :'Thakra',
    coursename:"js",
    price:"999"
    }

    // const {firstname} =person;
    const {firstname:fname} =person;
    console.log(fname);



    //api 
   /*JSON => java script object notation 
    // {
    //     "name":"hitesh",
    //     "courseName":"jshindi"
    //    "price":"free"
    //     "streetName":"srikanthnagar",

    // }           
    
    
    // 
    [
        {},
        {},
        {}
    ]
    */


    
console.log("Hello World"); 

let email = "telmanabdulladev@gmail.com";
console.log(email);

//Merge

let firsName = "Telman"
let lastName = "Abdulla"
let fullName = firsName + " " + lastName;
console.log(fullName); 


//get the characters from the string
console.log(fullName[0]); // return T

//Get len of the string 
console.log(fullName.length);

//Let's use if condition statement
// if(fullName.length > 0)
// {
//     checking 
// }


//Methods
console.log(fullName.toUpperCase());
let lowerFullName = fullName.toLocaleLowerCase();
console.log(lowerFullName);
console.log(fullName);

//Indecies
let index = fullName.indexOf("a")
console.log("First occurrence of index a is: ", index)
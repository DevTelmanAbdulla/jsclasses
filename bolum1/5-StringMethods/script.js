let fullName = "Telman Abdulla Farman"

let end = fullName.lastIndexOf("n")
console.log(end);

//slice

let startEnd = fullName.slice(0,5);
console.log(startEnd);

//substr
let startEndSubStr = fullName.substr(5,5);
console.log(startEndSubStr);

//replace
let charReplace = fullName.replace("n","w");
console.log(charReplace);
// let age = 30;

// if(true){
  
//   let age = 31;
//   console.log("Inside: ",age);
// }
// console.log("Outside: ",age);




// let age = 30;

// if(true){
  
//   let age = 31;
//   console.log("Inside: ",age);
//   if(true){
//    let age = 50;
//    console.log("Inside inside: ",age)
//   }
// }
// console.log("Outside: ",age);


//----difference between var and let--------
let age = 30;

if(true){
  
  let age = 31;
  console.log("Inside: ",age);
  if(true){
   let age = 50;
   let name = "Telman";
   var test = "Hello";
   console.log("Inside inside: ",age,name,test);
  }
}
console.log("Outside: ",age,test);
// const a = (callBacka) =>{
//     let age = 40;
//     callBacka(age);
// };
// a(function(value)
// {
//     console.log(value);
// }
// )


let students = ["Scarlett","Carlie","Tom","Megan"];
// students.forEach(function()
// {
//     console.log("Laura");
// }
// )

// //get elements only
// students.forEach(function(person)
// {
//     console.log(person);
// }
// )

// //get elements with their indecies
// students.forEach(function(person,index)
// {
//     console.log(person,index);
// }
// )

//expression function
const student = (person,index) =>{
    console.log(`${index} - ${person}`);
}
students.forEach(student);

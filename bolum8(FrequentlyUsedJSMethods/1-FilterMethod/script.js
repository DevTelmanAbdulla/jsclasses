/*
The filter() method is a built-in function in JavaScript that operates on arrays. 
It is used to create a new array containing elements from the original array that 
meet a specific condition or criteria. The filter() method does not modify the 
original array; 
it returns a new array with the filtered elements.
*/

//sample 
// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredArray = originalArray.filter(element => {
//     // Return true to keep the element in the filtered array
//     // Return false to exclude the element from the filtered array
//     return element % 2 === 0; // Keep only even numbers
// });

// console.log(filteredArray); // Output: [2, 4, 6, 8, 10]


const points = [78,75,25,35,10,80,27]; //Points that students received on the exam

// const studentsPassed = points.filter(point =>{
//     return point > 50;
// })

const studentsPassed = points.filter(point =>point > 50)
console.log(studentsPassed);

const students = [
    {name:'Emmy', passed:true},
    {name:'Megan', passed:false},
    {name:'Selena', passed:false},
    {name:'Charlie', passed:true},
];

const passedstudents = students.filter(student =>{
    return student.passed
    // return !student.passed  // students who are were not succeed
})

console.log(passedstudents);


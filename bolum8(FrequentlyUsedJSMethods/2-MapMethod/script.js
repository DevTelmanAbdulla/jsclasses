/* 
The map() method is a built-in function in JavaScript that operates on arrays. 
It's used to create a new array by applying a provided function to each element 
of the original array. The resulting array will contain the results of applying the 
function to each element, 
in the same order as the original array.
*/

//sample explains map function
// const originalArray = [1, 2, 3, 4, 5];

// const mappedArray = originalArray.map(element => {
//     return element * 2; // Double each element
// });

// console.log(mappedArray); // Output: [2, 4, 6, 8, 10]


//Task

const points = [78,75,25,35,10,80,27];

const newPoints = points.map(point=>{
    return point +10;
})

console.log(newPoints);

const students = [
    {name:'Emmy', point:40},
    {name:'Megan', point:60},
    {name:'Selena', point:30},
    {name:'Charlie', point:100},
];

// the instructor awards free points to her students
const newStudentPoints = students.map(student=>{
    if(student.point < 50){
        student.point+=15;
        return student; //will return students with scores less than 50 whenever
    //  return {name:student.name, point:student.point + 15}
    }
    else{
        return student;
    }
})
console.log(newStudentPoints);
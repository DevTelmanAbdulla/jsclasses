/* 
The reduce() method is a built-in function in JavaScript that operates on arrays. 
It's used to "reduce" an array to a single value by applying a provided function 
to each element of the array. The reduce() method iterates over the array and 
accumulates(pick up) the results based on 
the logic defined in the provided function.
*/
//this sample explains what reduce method means
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue; // Accumulate the sum of all elements
// }, 0);

// console.log(sum); // Output: 15

const points = [70,75,25,35,10,80,27];


const result = points.reduce((value,point)=>{
 if(point > 50){
   value++;
 }
 return value;
},0)
console.log(result);

//let's take object given below to dive
//we need to get total points of Mark 
const students = [
    {name:'Mark',point:40},
    {name:'Olivia',point:60},
    {name:'Megan',point:30},
    {name:'Morgan',point:100},
    {name:'Mark',point:80},
    {name:'Khan',point:30},
    {name:'Emmy',point:60},
    {name:'Adriana',point:40},
];
//we create second parenthese in previous parantheses because of it has two parametrs
const markTotal = students.reduce((value,student)=>{
    if(student.name=='Mark'){
        value+=student.point;
    }
    return value;
},0)

console.log(markTotal);


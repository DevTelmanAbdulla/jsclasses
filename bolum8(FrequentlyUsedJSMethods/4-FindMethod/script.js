

/* 
The find() method is a built-in function in JavaScript that operates on arrays. 
It's used to search for an element in an array that satisfies a provided condition, 
and it returns the first element that matches the condition. If no element is found, 
it returns undefined.
Here's a brief overview of how the find() method works:
*/
// const numbers = [1, 2, 3, 4, 5];

// const foundNumber = numbers.find(element => {
//     return element > 2; // Find the first number greater than 2
// });

// console.log(foundNumber); // Output: 3

const points = [70,65,25,35,10,80,97];

//find the first number greater than 75

const highPoint = points.find(point=>{
    return point > 70;
})
console.log(highPoint);



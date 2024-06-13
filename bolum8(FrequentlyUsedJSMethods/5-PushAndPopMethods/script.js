/* 
The push() method is used to add one or more elements to the end of an array. 
It modifies the original array and 
returns the new length of the array.
*/

//sample 1
// const numbers = [1, 2, 3];
// numbers.push(4); // Adds 4 to the end of the array
// console.log(numbers); // Output: [1, 2, 3, 4]

//sample 2
// numbers.push(5, 6, 7); // Adds 5, 6, and 7 to the end of the array
// console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]

/* 
The pop() method is used to remove the last element from the end of an array. 
It modifies the original array and 
returns the removed element.
If the array is empty, pop() returns undefined
*/
// const fruits = ['apple', 'banana', 'orange'];
// const removedFruit = fruits.pop(); // Removes 'orange' from the end of the array
// console.log(removedFruit); // Output: 'orange'
// console.log(fruits); // Output: ['apple', 'banana']




const points = [70,75,25,35,10,80,27];

points.push(90);
console.log(points);

points.pop();
console.log(points);

points.pop();
console.log(points);


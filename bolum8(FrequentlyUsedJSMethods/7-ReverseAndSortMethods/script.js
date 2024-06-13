/* 
reverse() Method:
The reverse() method reverses the order of the elements in an array. 
It modifies the original array and does not create a new array.
*/
//sample for reverse() method
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // Output: [5, 4, 3, 2, 1]



/* 
The sort() method is used to sort the elements of an array in ascending order. 
By default, it converts elements to strings and sorts them based on their UTF-16 code units. 
You can provide a comparison function to specify a custom sorting order.
*/
// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort();
// console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']

const names = ['Emmy','Olivia','Megan','Morgan','Scarlett'];

names.sort();
names.reverse();
// console.log(names);

//let's sort points given below
const points = [70,75,25,3,10,80,27];
// points.sort(); // is not efficient way to sort elements
points.sort((a,b)=>b-a);
points.sort((a,b)=>a-b);
// points.reverse();
console.log(points);


//let's sort objects by their points
const students = [
    {name:'Emmy',point:40},
    {name:'Olivia',point:60},
    {name:'Megan',point:30},
    {name:'Scarlett',point:100},
];
students.sort((a,b)=>{
    if(a.point > b.point){
        return -1;
    }

    else if(b.point > a.point){
        return 1;
    }

    else {
        return 0;
    }
});

console.log(students);

//The following code might offer a quicker solution compared to the one above
students.sort((a,b) => b.point - a.point);
console.log(students);


//another way 

// students.sort((a, b) => {
//     const pointA = parseInt(a.point);
//     const pointB = parseInt(b.point);

//     if (pointA > pointB) {
//         return -1;
//     } else if (pointB > pointA) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(students);






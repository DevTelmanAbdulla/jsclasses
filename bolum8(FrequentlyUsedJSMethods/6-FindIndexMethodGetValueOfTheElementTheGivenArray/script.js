const points = [70,75,25,35,10,80,27];

const arrayIndex = points.findIndex(point => point == 35);

points[arrayIndex] = 45;
console.log(points);


const students = [
    {name:'Mark',point:40},
    {name:'Elizabeth',point:60},
    {name:'Megan',point:30},
    {name:'Morgan',point:100},   
];

const objectIndex = students.findIndex(student => student.name == 'Mark');
students[objectIndex].name = 'Adriana';
console.log(students);

//let's modify Megan's point from 30 to 80
const objin = students.findIndex(student => student.name == 'Megan');
students[objin].point = 80;
console.log(students);

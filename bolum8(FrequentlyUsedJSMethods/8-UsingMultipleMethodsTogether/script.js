const students = [
    {name:'Megan',point:40},
    {name:'Morgan',point:60},
    {name:'Rossum',point:30},
    {name:'Scaelett',point:100},
    {name:'Camila',point:45},
    {name:'Lawrence',point:70},
];

// const filtered = students.filter(student => {
//     return student.point < 50;
// });

//you can also write like below
const filtered = students.filter(student =>student.point < 50);

const plusPoint = filtered.map(student=>{
    return `${student.name} named student's new point ${student.point + 15}`;

})
console.log(plusPoint);


//clear code
const newScores = students.filter(student => student.point < 50)
.map(student => `${student.name} named student's new score ${student.point + 15}`);
console.log(newScores);
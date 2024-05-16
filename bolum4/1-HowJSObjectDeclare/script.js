let student = {
    firstName:"Eiza",
    lastName:"Gonzalez",
    age:33,
    email:"eizagonzalez@gmail.com",
    grade:2,
    subjects:['physics','math','chemistry']
};

console.log(student);
console.log(student.age);

student.age = 20;
console.log(student.age);
console.log(student['age']);

student['firstName'] = 'Selena';
console.log(student['firstName']);

console.log(typeof student);
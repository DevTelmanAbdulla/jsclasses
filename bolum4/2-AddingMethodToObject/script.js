// let student = {
//     firstName:"Eiza",
//     lastName:"Gonzalez",
//     age:33,
//     email:"eizagonzalez@gmail.com",
//     grade:2,
//     subjects:['physics','math','chemistry'],
//     login:function()
//     {
//         console.log("Student Logged In")
//     },
//     logout:function()
//     {
//         console.log("Student Logged Out")
//     }
// };

// student.login();
// student.logout();

//can also be written
let student = {
    firstName:"Eiza",
    lastName:"Gonzalez",
    age:33,
    email:"eizagonzalez@gmail.com",
    grade:2,
    subjects:['physics','math','chemistry'],
    login()
    {
        console.log("Student Logged In")
    },
    logout()
    {
        console.log("Student Logged Out")
    }
};

student.login();
student.logout();


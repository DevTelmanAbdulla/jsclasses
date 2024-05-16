// const subjects = [
//     {subName:'physics',score:90},
//     {subName:'math',score:80},
//     {subName:'chemistry',score:85},
// ]


let student = {
    firstName:"Eiza",
    lastName:"Gonzalez",
    age:33,
    email:"eizagonzalez@gmail.com",
    grade:2,
    subjects:[
    {subName:'physics',score:90},
    {subName:'math',score:80},
    {subName:'chemistry',score:85},],
    login()
    {
        console.log("Student Logged In")
    },
    logout()
    {
        console.log("Student Logged Out")
    },
    printLessons()
    {
        console.log(this.subjects);
    //   console.log(subjects); subjects object is not defined
    //   console.log(this);
        this.subjects.forEach(subject => {
            console.log(subject.subName, subject.score);
        }
        )
     
    }
};

// console.log(this);
student.printLessons();
// student.login();
// student.logout();
class User{
    constructor(firstName,email){
      this.name = firstName;
      this.email = email;
    }
    //login bir funksiya olduqu ucun constructorun icersinde tamamlanmalidir
    login(){
        console.log(`${this.name} logged in`);
        return this; //we used template strings
    }
    logout(){
        console.log(`${this.name} logged out`);
        // return this;  bunu yazmaqa ehtiyac yoxdur cunki en sonda logout calisir
    }
}

class Admin extends User{
 deleteUser(userArrived){
   users = users.filter(user=>user.name!== userArrived.name)
 }
}

const userOne = new User('Scarlett','scarlett@hotmail.com');
const userTwo = new User('Megan','megan@gmail.com');
const userThree = new Admin('Morgan','morgan@gmail.com');


let users = [userOne,userTwo,userThree];
userThree.deleteUser(userOne)

console.log(userOne,userTwo,userThree);
console.log(users);





class User{
    constructor(firstName,email){
      this.name = firstName;
      this.email = email;
    }
    //login bir funksiya olduqu ucun constructorun icersinde tamamlanmalidir
    login(){
        return `${this.name} logged in`;//we used template strings
    }
    logout(){
        return `${this.name} logged out`;
    }
}

const userOne = new User('Scarlett','scarlett@hotmail.com');
const userTwo = new User('Megan','megan@gmail.com');
console.log(userOne,userTwo);
console.log(userOne.login(),userTwo.logout());





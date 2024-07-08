//userin istifadeci adi, emaili, sisteme giris etdimi ves
const userOne = {
    userName : 'Scarlett Johansonn',
    email: 'scarlett@gmail.com',
    login(){
        console.log('Scarlett Johansonn Logged In')
    },
    logout(){
        console.log('Scarlett Johansonn Logged Out')
    }
};

console.log(userOne.email, userOne.userName);
userOne.login();
userOne.logout();


const userTwo = {
    userName : 'Jeniffer Lawrence ',
    email: 'jenifferlawrence@gmail.com',
    login(){
        console.log('Jeniffer Lawrence Logged In')
    },
    logout(){
        console.log('Jeniffer Lawrence Logged Out')
    }
};

console.log(userTwo.email, userTwo.userName);
userOne.login();
userOne.logout();

//yuxarida her defe obyekt yaratmaq isteyende properti yaratmaq yerine class yaratmaq daha mentiqlidir

const userThree = new User('Jeniffer','jeniffer@gmail.com');

//novbeti dersde ...


const form = document.querySelector('.signupForm');
const username = document.querySelector('#username');


form.addEventListener('submit',e=>{
    e.preventDefault(); //to print console
    // console.log('Form Sent');
    // console.log(username.value);// this is one of the methods to get value
    console.log(form.username.value); // this is another method to get value
})
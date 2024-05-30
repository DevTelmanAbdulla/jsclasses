const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');


form.addEventListener('submit', e=>{
    e.preventDefault();
    const username = form.username.value;  // getting value of username inside the form 
    const usernamePatter = /^[a-z]{6,10}$/;

    if(usernamePatter.test(username)){
     message.textContent='Succeed!'
    }
    else{
        message.textContent='Lowercase and between 6 and 12 characters allowed only!'
    }
})



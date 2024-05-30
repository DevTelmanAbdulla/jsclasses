//keyup event will got started to be triggered once took your hands off the keyboard
//border will remain red until the requirements are covered

const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');
const usernamePatter = /^[a-z]{6,10}$/;//pattern name


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

form.username.addEventListener('keyup', e=>{
    //e.target represents "input" itself
    // console.log(e.target.value); recommended 
    // console.log(form.username.value);//this is the same as the previous code given above
   if(usernamePatter.test(e.target.value))
   {
    // console.log('Succeed!');
    form.username.setAttribute('class','success')
   }
   else
   {
    
    // console.log('Failed!');
    form.username.setAttribute('class','error')
   }
})
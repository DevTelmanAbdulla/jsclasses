const correctAnswers = ['Y','Y','Y','Y'];

//go to form to get class
const form = document.querySelector('.question-form');

//let's get the result class from div through querySelector
const result = document.querySelector('.result');


form.addEventListener('submit',e=>{
    e.preventDefault(); //it prevents web to be updated

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer,index) =>{
         if(answer===correctAnswers[index]){
            score +=25;
         }
    })
    // console.log(score);
    result.classList.remove('d-none');
    result.querySelector('span').textContent = `${score}%`;
})

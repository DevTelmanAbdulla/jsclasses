
const correctAnswers = ['Y', 'Y', 'Y', 'Y'];

// Go to form to get class
const form = document.querySelector('.question-form');

// Let's get the result class from div through querySelector
const result = document.querySelector('.result');

// // Initialize the mark variable
let mark = 0;

form.addEventListener('submit', e => {
    e.preventDefault(); // It prevents the web page from being updated

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // Show the result
    result.classList.remove('d-none');

    // Start the animation
    // we have to create variable(like suppress has been created) in order to use clearInterval
    const suppress = setInterval(() => {
        result.querySelector('span').textContent = `${mark}%`;
        if (mark == score) {
            clearInterval(suppress);
        } else {
            mark++;
        }
    }, 10); // This sets a 20-millisecond interval for updating the percentage
});



// setTimeout(()=>{
    // console.log('Hello');
// },5000); // will be displayed after a 5 second refresh

// setInterval(() =>{
//     console.log('Hello');
// },1000)

//preventing numbers from increasing by 1 every second.
// let i = 0;
// const suppress = setInterval(()=>{
//     console.log('Hello');
//     i++;
//     if(i==4){
//         clearInterval(suppress);
//     }
// }, 1000);






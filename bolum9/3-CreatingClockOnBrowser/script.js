const clock = document.querySelector('.clock');

const formatTime = (value) => {
    return value.toString().padStart(2, '0');
}; // valueni stringe cevirir eyni zamanda eded 2 reqemli qaytarir eded 2 reqemli deyilse 0 elave edir
const tick = () => {
 const now  = new Date();
 const hours = formatTime(now.getHours());
 const minutes = formatTime(now.getMinutes());
 const seconds = formatTime(now.getSeconds());

 //console.log(hours,minutes,seconds);

 const html = 
 `
 <span>${hours}</span> :
 <span>${minutes}</span>: 
 <span>${seconds}</span>
 `
 clock.innerHTML = html;
};

setInterval(tick,1000)
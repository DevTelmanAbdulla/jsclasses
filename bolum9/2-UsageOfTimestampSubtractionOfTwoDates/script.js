const startDate = new Date('08/15/2017 9:45:00');
const now = new Date();//current time
console.log(startDate);

//iki tarix arasindaki ferqi millisecond cinsinden hesablayaq

const diff = now.getTime() - startDate.getTime();
console.log(diff);

const mins = Math.round(diff/1000/60);//will be converted to minute
const hours = Math.round(mins/60);//will be converted to hour
const days = Math.round(hours/60);//will be converted to day
const years = Math.round(days/365);//will be converted to year
console.log(`Video cekmeye: ${mins} deqiqe once basladim`)
console.log(`Video cekmeye: ${hours} saat once basladim`)
console.log(`Video cekmeye: ${days} gun once basladim`)
console.log(`Video cekmeye: ${years} il once basladim`)


const timestamp = 1691864518903;
console.log(new Date(timestamp));
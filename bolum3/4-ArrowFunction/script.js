// const squareArea = function(){
//     return edge **2;
// }

//if function accepts just a paramaetres then parantheses are not required
//  And also return keyword won't required once you wrote everything in a line
// const squareArea =(edge) =>{
//     return edge **2;
// }
// const result = squareArea(6);
// console.log(result);
// const squareArea =edge => edge **2;
// const result = squareArea(6);
// console.log(result);



//------sample------
// const fullName = function(){
//     return 'EmmyRossum';
// }
// const result = fullName();
// console.log(result);




// another way with Arrow function
// const fullName =() =>'EmmyRossum';
// const result = fullName();
// console.log(result);


//--------Task--------
// const invoice = function(products,tax){
//     let total = 0;
//     for(let i=0; i<products.length; i++){
//         total+=products[i] + products[i]*tax;
//     }
//     return total;
// }
// console.log(invoice([10,20,30],0.25))

//i=0 tot= 0+10+10*0.25=12.5
//i=1 tot = 12.5+20+20*0.25=37.5
//i==2 tot = 37.5+ 30+7.5=75



//--------Task above with Arrow Function--------
const invoice = (products,tax) => {
    let total = 0;
    for(let i=0; i<products.length; i++){
        total+=products[i] + products[i]*tax;
    }
    return total;
}
console.log(invoice([10,20,30],0.25))

//i=0 tot= 0+10+10*0.25=12.5
//i=1 tot = 12.5+20+20*0.25=37.5
//i==2 tot = 37.5+ 30+7.5=75
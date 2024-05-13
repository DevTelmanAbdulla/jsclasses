// const fullName = function(firstName,lastName){
//     console.log('Name: ' +firstName+ ' Surname: '+lastName);
//     console.log(`Name: ${firstName} Surname: ${lastName}`);
// }

// fullName('Scarlett','Johansson'); 


const fullName = function(firstName = 'Scarlett',lastName = 'Johansson'){
    console.log('Name: ' +firstName+ ' Surname: '+lastName);
    console.log(`Name: ${firstName} Surname: ${lastName}`);
}
fullName();
fullName('Megan','Fox'); 
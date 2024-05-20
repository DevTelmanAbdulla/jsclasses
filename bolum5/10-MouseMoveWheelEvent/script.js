const box = document.querySelector('.box');
box.addEventListener('mousemove',e =>{
    //Used to set the click point and direction for games and interactive applications.
    // console.log(e);
    // console.log(e.offsetX,e.offsetY); 
    //x and y coordinates will be changed once moved the mouse
    box.textContent=`x koordinat ${e.offsetX},y koordinati ${e.offsetY}`
}
)

document.addEventListener('wheel',e =>{
    console.log(e.pageX, e.pageY);
}
)
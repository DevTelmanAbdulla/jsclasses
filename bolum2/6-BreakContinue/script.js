const scores = [10,20,45,32,100,0,7];

for(let i=0; i<scores.length; i++){

    if(scores[i]===45){
        continue;
    }
    console.log(scores[i]);

     if(scores[i] ===100){
        console.log("The highest score you got. Congratulations!");
        break;
     }

}

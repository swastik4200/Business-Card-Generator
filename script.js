let rand = Math.random()
let first,second,third;

//generating the 1st word
if(rand<0.33){
    first = "crazy";
}
else if(rand>=0.33 && rand<0.66){
    first = "amazing";
}
else{
    first = "fire"
}

//generate the second word

 if(rand<0.33){
    second = "engine";
}
else if(rand>=0.33 && rand<0.66){
    second = "foods";
}
else{
    second = "garments"
}

// generate the third word
if(rand<0.33){
    third = "bros";
}
else if(rand>=0.33 && rand<0.66){
    fthird= "limited";
}
else{
    third = "hub"
}
console.log(`${first} ${second} ${third}`);
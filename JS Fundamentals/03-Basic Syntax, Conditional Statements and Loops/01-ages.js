function ages(age){

if(age >= 0 && age <= 2){
 console.log(`baby`)
}else if(age >= 3 && 13 >= age){
    console.log(`child`);
}
else if(age >=14 && 19 >= age){
    console.log(`teenager`);
}
else if(age >= 20 && 65 >= age){
    console.log(`adult`);
}
else if(age >= 66){
    console.log(`elder`);
}
else{
    console.log(`out of bounds`);
}

}
ages(-1)
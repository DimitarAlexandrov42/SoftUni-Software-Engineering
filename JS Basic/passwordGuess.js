function passwordGuess(input){
    let password = input[0]

if(password === "s3cr3t!P@ssw0rd"){
    console.log(`Welcome`)
}
else{
    console.log(`Wrong password!`)
}
}
passwordGuess(["s3cr3t!P@ssw0rd"])
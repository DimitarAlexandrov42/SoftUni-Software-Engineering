function lowerOtUpper(input){
    let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let UpperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let FindLetter = false
    
    for(let i = 0 ; i < lowerAlphabet.length ; i++){
      if(lowerAlphabet[i] === input){
           console.log("lower-case");
      }
    }
    for(let x = 0 ; x < UpperAlphabet.length ; x++){
        if(UpperAlphabet[x]=== input){
            console.log("upper-case");
        }
    }

}
lowerOtUpper("S")
function rightPlace(str, char, result){

    let newStr = str.replace("_", char)

    let output = result === newStr? "Matched" : "Not Matched" ; 

    console.log(output)


}

rightPlace("Str_ng", "i", "String")
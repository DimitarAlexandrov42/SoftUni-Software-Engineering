function passwordValidator(password) {

    let pass = password.split("")
    let symbolsCounter = 0
    let betweenSixAndTen = false
    let onlyLettersAndNumbers = false
    let atLeast2Digites = false
    let digitsCounter = 0
    let correctSymbol = 0

    for (let i = 0; i < pass.length; i++) {
        let currSymbol = pass[i]
        let char = currSymbol.charCodeAt()

        symbolsCounter++

        if (48 <= char && char <= 57 || 65 <= char && char <= 90 || 97 <= char && char <= 122) {
            correctSymbol++
            onlyLettersAndNumbers = true
            if (correctSymbol !== pass.length) {
                onlyLettersAndNumbers = false
            }

        }

        if (symbolsCounter >= 6 && symbolsCounter <= 10) {
            betweenSixAndTen = true
        }
        if (char >= 48 && char <= 57) {
            digitsCounter++
            if (digitsCounter >= 2) {
                atLeast2Digites = true
            }

        } 

    }

    if (!betweenSixAndTen) {
        console.log('Password must be between 6 and 10 characters');
    }
     if (!onlyLettersAndNumbers) {
        console.log('Password must consist only of letters and digits');
    }
     if (!atLeast2Digites) {
        console.log('Password must have at least 2 digits');
    } if (betweenSixAndTen && onlyLettersAndNumbers && atLeast2Digites) {
        console.log('Password is valid');
    }
}
passwordValidator('log%In')
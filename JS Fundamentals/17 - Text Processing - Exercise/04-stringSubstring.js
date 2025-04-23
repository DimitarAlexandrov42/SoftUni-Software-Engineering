function stringSubstring(word, text) {

    let serchedWord = word.toLowerCase()
    let work = text.split(' ')
    let isFound = false

    for (const iterator of work) {
        let tempWord = iterator.toLowerCase()
        if (tempWord === serchedWord) {
            console.log(serchedWord)
            isFound = true
        }
    }
    if(isFound === false){
        console.log(`${serchedWord} not found!`);
    }
}
stringSubstring('javascript',
    ' is the best programming language')
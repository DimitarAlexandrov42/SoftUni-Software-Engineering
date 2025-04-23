function modernTimesOfHashTag(text) {

    let work = text.split(' ')

    for (const words of work) {

        if (words[0] === '#' && words.length > 1) {
            let wordsArray = words.split('')
            wordsArray.shift()

            let wordsToPrint = ''
            for (const ch of wordsArray) {
                if (!isNaN(ch)) {
                    wordsToPrint = ''
                    break
                } else {
                    wordsToPrint += ch
                }
            }
            if (wordsToPrint.length > 0) {
                console.log(wordsToPrint);
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #speci4al word in #socialMedia')
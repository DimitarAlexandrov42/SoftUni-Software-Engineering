function revealWords(word, text) {

    let wordsToPut = word.split(', ')

    for (const word of wordsToPut) {
        let wordFromStars = '*'.repeat(word.length)

        text = text.replace(wordFromStars, word)
    }
    console.log(text);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')
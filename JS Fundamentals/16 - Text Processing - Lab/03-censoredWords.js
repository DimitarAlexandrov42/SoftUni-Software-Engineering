function censoredWords(text, word) {

    let result

    while (text.includes(word)) {
        let start = text.indexOf(word)
        let end = start + word.length
        result = text.substring(0, Number(start))
        result += '*'.repeat(word.length)
        result += text.substring(Number(end))
        text = result
    }
    console.log(result);

}
censoredWords('A small sentence with some words',
    'small')
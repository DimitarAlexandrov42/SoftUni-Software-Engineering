function matchFullName(text) {

    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g
    let result = []

    let match = pattern.exec(text)

    while (match) {
        result.push(match[0])
        match = pattern.exec(text)
    }
    console.log(result.join(' '));
}
matchFullName(`ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov,Test Testov, Ivan IvAnov,
    Ivan Ivanov`)
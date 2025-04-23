function replaceRepeatingChars(text) {

    let result = ''

    for (let i = 0; i < text.length; i++) {
        let currEl = text[i]
        let prevEl = text[i - 1]

        if (currEl !== prevEl) {
            result += currEl
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
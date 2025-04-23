function pascalCaseSpiltter(text) {

    let result = []
    let index = 0

    for (let i = 1; i < text.length; i++) {

        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
            result.push(text.substring(index, i))
            index = i
        }
    }
    result.push(text.substring(index))
    console.log(result.join(', '));
}
pascalCaseSpiltter('SplitMeIfYouCanHaHaYouCantOrYouCan')
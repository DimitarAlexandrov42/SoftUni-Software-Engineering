function wordOccurrences(arr) {

    let obj = {}
    let obj2 = {}

    for (const word of arr) {
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1
        } else {
            obj[word] = 1
        }
    }

    let sortedWord = Object.entries(obj).sort((a, b) => b[1] - a[1])

    for (const [key, value] of sortedWord) {
        console.log(`${key} -> ${value} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]
)
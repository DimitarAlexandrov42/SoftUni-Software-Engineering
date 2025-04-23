function wordTracker(arr) {

    let serchedWords = arr.shift().split(" ")

    let obj = {}

    for (const word of serchedWords) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0
        }

        for (const serchedWords of arr) {
            if (word === serchedWords) {
                obj[word]++
            }
        }

    }
    let sortedWord = Object.entries(obj).sort((a,b) => b[1] - a[1])

    for (const [key, value] of sortedWord) {
        console.log(`${key} - ${value}`);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])
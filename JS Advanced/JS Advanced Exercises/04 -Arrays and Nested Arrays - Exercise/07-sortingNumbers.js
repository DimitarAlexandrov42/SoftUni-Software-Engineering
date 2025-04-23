function sortingNumbers(arr) {
    let result = []
    let length = arr.length
    let sorted = arr.sort((a, b) => a - b)

    for (let i = 0; i < length/2; i++) {
        result.push(sorted.shift())
        result.push(sorted.pop())

    }

    return result

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
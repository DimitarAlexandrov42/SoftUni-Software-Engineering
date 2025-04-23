function result(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN
    }
    let startIndex = Math.max(start, 0)
    let endIndex = Math.min(end, numbers.length - 1)

    let subNumbers = numbers.slice(startIndex, endIndex + 1)


    let sum = subNumbers.reduce((a, x) => a + Number(x), 0)

    return sum
}
result([10, 20, 30, 40, 50, 60], 3, 300)
result([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
result([10, "twenty", 30, 40], 0, 2)
result([], 1, 2)
result("text", 0, 2)
// module.exports = result
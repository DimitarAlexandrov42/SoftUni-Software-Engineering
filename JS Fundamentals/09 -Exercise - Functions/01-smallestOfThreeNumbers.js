function smallestOfThreeNumber(num1, num2, num3) {

    let result = []
    result.push(num1)
    result.push(num2)
    result.push(num3)

    result.sort((a, b) => a - b)

    let minNum = result.shift()
    console.log(minNum);
}
smallestOfThreeNumber(55, 1, 22)
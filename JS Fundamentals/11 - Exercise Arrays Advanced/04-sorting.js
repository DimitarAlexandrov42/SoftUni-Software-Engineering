function sorting(arr) {

    let arrayLength = arr.length
    let simArr = arr.slice(0)
    let sortedArr = simArr.sort((a, b) => a - b)
    let result = []

    for (let i = 0; i < arrayLength/2; i++) {
        let firstNum = sortedArr.pop()
        let lastNum = sortedArr.shift()
        result.push(firstNum)
        result.push(lastNum)
       
    }

console.log(result.join(" "));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
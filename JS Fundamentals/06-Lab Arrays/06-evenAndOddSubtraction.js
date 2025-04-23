function evenAndOddSubtraction(arr) {

    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i < arr.length; i++) {

        let currentNum = arr[i]

        if (currentNum % 2 === 0) {
            evenSum += currentNum
        } else if (currentNum % 2 !== 0) {
            oddSum += currentNum
        }
    }
    console.log(evenSum-oddSum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
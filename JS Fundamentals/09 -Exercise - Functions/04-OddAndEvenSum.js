function oddAndEvenSum(numbers) {

    let currNum = String(numbers)
    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i < currNum.length; i++) {

        let currDigit = Number(currNum[i]
        )
        if (currDigit % 2 === 0) {
            evenSum += currDigit
        } else {
            oddSum += currDigit
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234)
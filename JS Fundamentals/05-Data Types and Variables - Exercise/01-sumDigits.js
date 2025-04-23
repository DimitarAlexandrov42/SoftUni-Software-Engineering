function sumDigits(input) {

    let inputAsString = input.toString()
    let totalSum = 0

    for (let i = 0; i < inputAsString.toString().length; i++) {
        let currentDigit = inputAsString[i]

        currentDigit = Number(currentDigit)

        totalSum += Number(currentDigit)

    }

    console.log(totalSum)

}
sumDigits(245678)
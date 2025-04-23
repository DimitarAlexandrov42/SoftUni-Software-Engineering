function sumPrimeNonPrime(input) {

    index = 0
    let command = (input[index])
    index++

    let pirmeDigits = 0
    let nonPrimeDigits = 0

    while (command !== "stop") {
        let curNum = Number(command)

        if (curNum < 0) {
            console.log(`Number is negative.`)
            command = input[index]
            index++
            continue
        }

        let isPrime = true

        for (let i = 2; i < curNum; i++) {
            if (curNum % i === 0) {
                isPrime = false

            }
        } if (isPrime) {
            pirmeDigits += curNum
        } else {
            nonPrimeDigits += curNum
        }

        command = input[index]
        index++

    }

    console.log(`Sum of all prime numbers is: ${pirmeDigits}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeDigits}`)

}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"])
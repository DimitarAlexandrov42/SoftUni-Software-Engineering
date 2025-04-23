function sumOfTwoNumbers(input) {

    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let magicNum = Number(input[2])
    let counter = 0
    let findNumber = false

    for (i = num1; i <= num2; i++) {
        for (x = num1; x <= num2; x++) {
            let sum = x + i
            counter++

            if (sum === magicNum) {
                findNumber = true
                break
            }
        } if (findNumber) {
            break
        }
    } if (findNumber) {
        console.log(`Combination N:${counter} (${i} + ${x} = ${magicNum})`)
    } else {
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwoNumbers(["88", "888", "2000"])
function sumOfOddNumbers(input) {

    let counter = 0
    let num = 1
    let totalSum = 0

    while (counter < input) {

        if (num % 2 === 1) {
            console.log(num)
            counter++
            totalSum += num
        }
        
        num++
        
    }
    console.log(`Sum: ${totalSum}`)
}
sumOfOddNumbers(["5"])
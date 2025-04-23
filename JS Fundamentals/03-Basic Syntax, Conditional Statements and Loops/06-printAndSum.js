function printAndSum(start, end) {

    let totalSum = 0
    let buff = ""

    for (let i = start; i <= end; i++) {

        buff += i + " "
        totalSum += i

    }
    console.log(buff)
    console.log(`Sum: ${totalSum}`)

}
printAndSum(5, 10)
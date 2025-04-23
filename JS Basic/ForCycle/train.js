function train(input) {
    let num = input[0]
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        let buffG = Number(input[i])
        sum += buffG
    console.log(buffG)
    }
    
    console.log(`The sum of the digits is:  ${sum}`)
}
train(["655556"])
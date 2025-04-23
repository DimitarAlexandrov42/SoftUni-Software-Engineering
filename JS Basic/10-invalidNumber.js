function invalidNumber(input) {
    let num = Number(input[0])
    let valid = (100 <= num && num <= 200 || num === 0)

    if (!valid) {
        console.log("invalid")
    }
}
invalidNumber([""])
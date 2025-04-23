function christmasPreparation(input) {

    let paperCount = Number(input[0])
    let clothCount = Number(input[1])
    let glueCount = Number(input[2])
    let discountPercent = Number(input[3])


    let totalSum = 0

    let discount = (paperCount * 5.80 + clothCount * 7.20 + glueCount * 1.20) * (discountPercent / 100)

    totalSum = (paperCount * 5.80 + clothCount * 7.20 + glueCount * 1.20) - discount

    console.log(totalSum.toFixed(3))
}
christmasPreparation(["2",
    "3",
    "2.5",
    "25"])

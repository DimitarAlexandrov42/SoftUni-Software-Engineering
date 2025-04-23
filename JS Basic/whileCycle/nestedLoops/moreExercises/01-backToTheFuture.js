function backToTheFuture(input) {
    let ivanchoOld = 18
    let startingYear = 1800
    let inheretedMoney = Number(input[0])
    let yearWhichHeHadToLive = Number(input[1])
    let expenses = 0

    for (i = startingYear; i <= yearWhichHeHadToLive; i++) {

        if (i % 2 === 0) {
            expenses += 12000
        } else {
            expenses += 12000 + (ivanchoOld * 50)
        }
        ivanchoOld++
    } if (inheretedMoney >= expenses) {
        let moneyLeft = inheretedMoney - expenses
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`)
    } else {
        let neededMoney = expenses - inheretedMoney
        console.log(`He will need ${neededMoney.toFixed(2)} dollars to survive.`)
    }
}
backToTheFuture(["50000", "1802"])
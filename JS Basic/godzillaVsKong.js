function godzillaVsKong(input) {
    let budget = Number(input[0])
    let statistCount = Number(input[1])
    let priceForClotesForOneStatist = Number(input[2])
    let decor = budget * 0.10
    let totalMoneyForClotes = statistCount * priceForClotesForOneStatist

    if (statistCount >= 150) {
        totalMoneyForClotes = totalMoneyForClotes * 0.90
    }

    let totalMoney = decor + totalMoneyForClotes

    if (totalMoney > budget) {
        let neededMoney = totalMoney - budget
        console.log("Not enough money!")
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`)
    }
    else {
        let leftMoney = budget - totalMoney
        console.log("Action!")
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)

    }

}
godzillaVsKong(["9587.88",

    "222",

    "55.68"])
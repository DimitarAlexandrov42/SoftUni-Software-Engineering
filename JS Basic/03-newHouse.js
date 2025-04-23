function newHouse(input) {
    let typeFlower = input[0]
    let count = Number(input[1])
    let budget = Number(input[2])
    let totalSum = 0

    switch (typeFlower) {
        case "Roses": if (count > 80) {
            totalSum = (count * 5) * 0.90
        } else {
            totalSum = count * 5
        }; break;
        case "Dahlias": if (count > 90) {
            totalSum = (count * 3.80) * 0.85
        } else {
            totalSum = count * 3.80
        }; break;
        case "Tulips": if (count > 80) {
            totalSum = (count * 2.80) * 0.85
        } else {
            totalSum = count * 2.80
        }; break;
        case "Narcissus": if (count < 120) {
            totalSum = (count * 3) * 1.15
        } else {
            totalSum = count * 3
        }; break;
        case "Gladiolus": if (count < 80) {
            totalSum = (count * 2.50) * 1.20
        } else {
            totalSum = count * 2.50
        }; break;
    }
    if(budget >= totalSum){
        let leftSum = budget - totalSum
    console.log(`Hey, you have a great garden with ${count} ${typeFlower} and ${leftSum.toFixed(2)} leva left.`)
} else if (budget < totalSum) {
    let neededMoney = totalSum - budget
    console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
}
}
newHouse(["Roses",

"2",

"10"])
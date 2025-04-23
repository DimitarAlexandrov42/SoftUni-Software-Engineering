function shopping(input){
    let budget = Number(input[0])
    let graphicCard = Number(input[1])
    let cpu = Number(input[2])
    let ramMemory = Number(input[3])

    let graphicCardPrice = graphicCard * 250
    let cpuPrice = graphicCardPrice * 0.35 * cpu
    let ramMemoryPrice = graphicCardPrice * 0.10 * ramMemory
    let totalSum = graphicCardPrice + cpuPrice + ramMemoryPrice

if(graphicCard > cpu) {
    let disscount = totalSum * 0.15
    totalSum = totalSum - disscount
}
if(budget >= totalSum){
    let moneyLeft = budget - totalSum
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
}
else{
    let moneyNeeded = totalSum - budget
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)

}

}
shopping(["920.45",

"3",

"1",

"1"])
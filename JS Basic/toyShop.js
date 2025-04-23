function toyShop(input){
    let excursion = Number(input[0]) 
    let puzzle = Number(input[1]) 
    let doll = Number(input[2]) 
    let bear = Number(input[3]) 
    let minion = Number(input[4])
    let truck = Number(input[5])
    let puzzlePrice = puzzle * 2.60
    let dollPrice = doll * 3
    let bearPrice = bear * 4.10
    let minionPrice = minion * 8.20
    let truckPrice = truck * 2
    let totalCount = puzzle + doll + bear + minion + truck
    let totalSum = puzzlePrice + dollPrice + bearPrice + minionPrice + truckPrice

    if(totalCount >= 50){
       totalSum = totalSum * 0.75
       
     }
     totalSum = totalSum * 0.90

    if(totalSum >=excursion){
        let leftMoney = totalSum - excursion
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`)
        } 
    else{ 
         
        let neededMoney = excursion - totalSum
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`)
    }
}
toyShop(["320", "8", "2", "5", "5", "1"])
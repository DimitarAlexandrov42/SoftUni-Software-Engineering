function shopping(input){
    let budget = Number(input[0])
    let videoCardCount = Number(input[1])
    let cpuCount = Number(input[2])
    let ramMemoryCount = Number(input[3])

    let sumForVideoCards = videoCardCount * 250 
    let priceOfOneCpu = sumForVideoCards * 0.35
    let priceOfOneRamMemory = sumForVideoCards * 0.10

    let totalSum = sumForVideoCards +(priceOfOneCpu * cpuCount) + ( priceOfOneRamMemory * ramMemoryCount)

    let disscount = totalSum * 0.15
    let disscountedTotalSum = totalSum - disscount
    let leftBudget = Math.abs(budget - disscountedTotalSum).toFixed(2)

    let totalPriceWithOutDisscount = Math.abs(budget - totalSum)




    if(budget > disscountedTotalSum && videoCardCount > cpuCount)  {let disscount = totalSum * 0.15
        let disscountedTotalSum = totalSum - disscount
        let leftBudget = Math.abs(budget - disscountedTotalSum).toFixed(2)
        
        console.log(`You have ${leftBudget} leva left!`)
     } else {
        console.log(`Not enough money! You need ${leftBudget} leva more!`)

     }




}
shopping(["920.45",

"3",

"1",

"1"])
function shopping(input){
    let budget = Number(input[0])
    let videoCardCount = Number(input[1])
    let cpuCount = Number(input[2])
    let ramMemoryCount = Number(input[3])

    let sumForVideoCards = videoCardCount * 250 
    let priceOfOneCpu = sumForVideoCards * 0.35
    let priceOfOneRamMemory = sumForVideoCards * 0.10
    let totalSum = sumForVideoCards +(priceOfOneCpu * cpuCount) + ( priceOfOneRamMemory * ramMemoryCount)



    if(videoCardCount > cpuCount){
        let disscount = totalSum * 0.15
        let disscountedTotalSum = totalSum - disscount
    } 
       
       
       if(budget >= disscountedTotalSum) {
        let leftBudget = (budget - disscountedTotalSum).toFixed(2)
        console.log(`You have ${leftBudget} leva left!`)

        
    }
    else {
         let budgetNeeded =  (totalSum - budget)
        console.log(`Not enough money! You need ${budgetNeeded} leva more!`)

    }


}
shopping(["900","2","1","3"])
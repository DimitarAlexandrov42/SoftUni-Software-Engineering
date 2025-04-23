function shopping (input){
    let budget = Number(input[0])
    let videoCardCount = Number(input[1])
    let processorCount = Number(input[2])
    let ramMemoryCount = Number(input[3])

    let priceOfVideoCards = videoCardCount * 250
    let priceOfProcessors = priceOfVideoCards * 0.35
    let priceOfRamMemorys = priceOfVideoCards * 0.10
    let totalSum = priceOfVideoCards + (priceOfProcessors * processorCount) + (priceOfRamMemorys * ramMemoryCount)
    let disscountedSum =  totalSum - (totalSum * 0.15)
    let moneyLeft = budget - disscountedSum


if(videoCardCount > ramMemoryCount){
    
  
    
    
}    
if(budget >= disscountedSum){
    
     console.log(`You have ${moneyLeft} leva left!`)
}

else{
    let moneyLeft = Math.abs(budget - disscountedSum).toFixed(2)
    console.log(`Not enough money! You need ${moneyLeft} leva more!`)

  }
} 

shopping(["900",

"2",

"1",

"3"])
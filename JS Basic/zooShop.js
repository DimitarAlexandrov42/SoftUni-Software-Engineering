function zooShop(input){
    let dogFood = 2.50
    let catFood = 4  
    let packsOfDogFood = input[0]
    let packsOfCatFood = input[1]

    let totalPriceOfTheOrder = (dogFood * packsOfDogFood) + (catFood * packsOfCatFood)
    console.log(totalPriceOfTheOrder)
    
}
zooShop(["5","4"])
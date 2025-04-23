function fishingBoat(input) {
     let budget = Number(input[0])
     let season = input[1]
     let fishers = Number(input[2])
     let boatPrice = 0

switch(season){

    case "Spring":
       boatPrice = 3000 
    if(fishers <= 6){
        boatPrice *= 0.90
    }else if(7 <= fishers && fishers <= 11){
        boatPrice *=0.85
    }else if(fishers >= 12){
        boatPrice *= 0.75
    }if(fishers % 2 === 0){
        boatPrice *=0.95
    } ; break ;
    case "Summer":
       boatPrice = 4200 
       if(fishers <= 6){
        boatPrice *= 0.90
    }else if(7 <= fishers && fishers <= 11){
        boatPrice *=0.85
    }else if(fishers >= 12){
        boatPrice *= 0.75
    }if(fishers % 2 === 0){
        boatPrice *=0.95
    } ; break ;
    case "Autumn":
        boatPrice = 4200 
        if(fishers <= 6){
            boatPrice *= 0.90
        }else if(7 <= fishers && fishers <= 11){
            boatPrice *=0.85
        }else if(fishers >= 12){
            boatPrice *= 0.75
        } ; break ;
    case "Winter":
        boatPrice = 2600 
        if(fishers <= 6){
            boatPrice *= 0.90
        }else if(7 <= fishers && fishers <= 11){
            boatPrice *=0.85
        }else if(fishers >= 12){
            boatPrice *= 0.75
        }if(fishers % 2 === 0){
            boatPrice *=0.95
        } ; break ;

} if(budget >= boatPrice){
    let leftMoney = budget - boatPrice
    console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`)
}else if(budget < boatPrice){
    let neededMoney = boatPrice - budget
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`)

}

}
    
fishingBoat(["2000", "Winter", "13"])
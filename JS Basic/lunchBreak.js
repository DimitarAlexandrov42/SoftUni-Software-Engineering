function lunchBreak(input){

    let titleOfTherSerial = input[0]
    let durationOfTheSerial = Number(input[1])
    let durationOfTheBreak = Number(input[2])

    let timeForLunch = durationOfTheBreak * 0.125
    let timeForChill = durationOfTheBreak * 0.25

    let totalFreeTime =  durationOfTheBreak - (timeForChill + timeForLunch)
    let leftTime = durationOfTheBreak - (timeForChill + timeForLunch + durationOfTheSerial) 
    let moreTime = Math.ceil((timeForChill + timeForLunch + durationOfTheSerial) - durationOfTheBreak)

    if (totalFreeTime >= durationOfTheSerial) {
       console.log(`You have enough time to watch ${titleOfTherSerial} and left with ${leftTime} minutes free time.`)
    } else if(totalFreeTime < durationOfTheSerial){
        console.log(`You don't have enough time to watch ${titleOfTherSerial}, you need ${moreTime} more minutes.`)
    }

    
}
lunchBreak(["Teen Wolf","48","60"])


//You don't have enough time to watch Teen Wolf, you need 11 more minutes.
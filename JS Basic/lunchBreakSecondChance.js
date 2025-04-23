function lunchBreak(input){

    let titleOfTherSerial = input[0]
    let durationOfTheSerial = Number(input[1])
    let durationOfTheBreak = Number(input[2])

    let timeForLunch = durationOfTheBreak * 0.125
    let timeForChill = durationOfTheBreak * 0.25 

    let totalFreeTime =  durationOfTheBreak - (timeForChill + timeForLunch)
    let leftTime = totalFreeTime - durationOfTheSerial
    let moreTime = Math.ceil(durationOfTheSerial - totalFreeTime)

 

    if (totalFreeTime >= durationOfTheSerial) {
       console.log(`You have enough time to watch ${titleOfTherSerial} and left with ${leftTime} minutes free time.`)
    } else if(totalFreeTime < durationOfTheSerial){
        console.log(`You don't have enough time to watch ${titleOfTherSerial}, you need ${moreTime} more minutes.`)
    }

    
}
lunchBreak(["Game of Thrones",

"60",

"96"])


//You don't have enough time to watch Teen Wolf, you need 11 more minutes.
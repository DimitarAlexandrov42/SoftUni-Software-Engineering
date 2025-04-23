function lunchBreak(input){

    let titleOfTherSerial = input[0]
    let durationOfTheSerial = Number(input[1])
    let durationOfTheBreak = Number(input[2])

    let timeForLunch = durationOfTheBreak * 0.125
    let timeForChill = durationOfTheBreak * 0.25 

    let totalTakenTime = timeForChill + timeForLunch
    let timeLeft = durationOfTheBreak - totalTakenTime

      
    if (timeLeft >= durationOfTheSerial) {
        let finalTime = Math.ceil(timeLeft - durationOfTheSerial)
       console.log(`You have enough time to watch ${titleOfTherSerial} and left with ${finalTime} minutes free time.`)
    } else {
        let timeNeeded = Math.ceil(durationOfTheBreak - timeLeft)
        console.log(`You don't have enough time to watch ${titleOfTherSerial}, you need ${timeNeeded} more minutes.`)
    }
       
    
}
lunchBreak(["Teen Wolf","48","60"])


// 7:30 + 15:00 + 48 +22.30 =70:30
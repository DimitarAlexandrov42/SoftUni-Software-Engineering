function lunchBreak(input){

    let titleOfTherSerial = input[0]
    let durationOfTheSerial = Number(input[1])
    let durationOfTheBreak = Number(input[2])

    let timeForLunch = durationOfTheBreak * 0.125
    let timeForChill = durationOfTheBreak * 0.25

    let totalNeededTime = durationOfTheSerial + timeForChill + timeForLunch
    let freeTime = durationOfTheBreak - (durationOfTheSerial + timeForChill + timeForLunch)
    let lackOfTime = totalNeededTime - durationOfTheBreak

    if(totalNeededTime <= durationOfTheBreak){
        console.log(`You have enough time to watch ${titleOfTherSerial} and left with ${freeTime} minutes free time.`)
    } else if(totalNeededTime > durationOfTheBreak){
        let lackOfTime = Math.ceil(totalNeededTime - durationOfTheBreak)
        console.log(`You don't have enough time to watch ${titleOfTherSerial}, you need ${lackOfTime} more minutes.`)
    }
    (["Teen Wolf",

"48",

"60"]) 
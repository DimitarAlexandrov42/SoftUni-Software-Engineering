function worldSwimingRecord(input){
    let swimingRecord = Number(input[0])
    let distanceInMeters = Number(input[1])
    let timeForWhichHeSwim1M = (input[2])

    let timesOfDelay = Math.floor(distanceInMeters / 15)
    let timeOfDelay = timesOfDelay * 12.5

    let ivanchoTime = (distanceInMeters * timeForWhichHeSwim1M) + timeOfDelay
    let differenceInTime = swimingRecord - ivanchoTime
    let neededSecond = ivanchoTime - swimingRecord

if(swimingRecord > ivanchoTime){

      console.log(` Yes, he succeeded! The new world record is ${ivanchoTime.toFixed(2)} seconds.`)
}
else{
      console.log(`No, he failed! He was ${neededSecond.toFixed(2)} seconds slower.`)

}

}


worldSwimingRecord(["10464",

"1500",

"20"])
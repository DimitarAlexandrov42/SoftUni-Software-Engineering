function worldSwimingRecrod(input){

    let currentWorldRecord = Number(input[0])
    let distanceInMeter = Number(input[1])
    let timeInSecondsForWhichHeSwim1M = Number(input[2])

    let swimDelayTimes = Math.floor(distanceInMeter / 15) 
    let totalSwimDelay = (swimDelayTimes * 12.5)

    let timeToSwim = distanceInMeter * timeInSecondsForWhichHeSwim1M
    let totalTimeToSwim = (timeToSwim + totalSwimDelay).toFixed(2)
    let notReachedTime = Math.abs(currentWorldRecord - totalTimeToSwim).toFixed(2)

    if(currentWorldRecord < totalTimeToSwim){
        console.log(`No, he failed! He was ${notReachedTime} seconds slower.`)
        
    }else{
        console.log(`Yes, he succeeded! The new world record is ${totalTimeToSwim} seconds.`)
        
    }

}
worldSwimingRecrod(["55555.67",

"3017","5.03"])
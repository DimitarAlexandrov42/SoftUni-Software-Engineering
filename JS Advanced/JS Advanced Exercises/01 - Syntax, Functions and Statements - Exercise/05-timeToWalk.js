function timeToTalk(steps, stepsLength, speedKmh) {


    let distanceToUniM = (steps * stepsLength)



    let mH = speedKmh * 1000

    let mS = mH / 3600
    let result = distanceToUniM / mS
    let stepsPerMin = result / 60
    let breaks = Math.floor(distanceToUniM / 500)


    let hour = Math.floor(result / 3600)

    let min = Math.floor(result / 60)
    let sec = result % 60
    sec = Math.ceil(sec)
    min += breaks

    if (hour < 10) {

        if (min < 10 && sec > 9) {
            console.log(`0${hour}:0${min}:${sec}`);
        } else if (min < 10 && sec < 10) {
            console.log(`0${hour}:${min}:0${sec}`);
        } else if (min < 10 & sec < 10) {
            console.log(`0${hour}:0${min}:0${sec}`);
        } else {
            console.log(`0${hour}:${min}:${sec}`);
        }

    } else {

        if (min < 10 && sec > 9) {
            console.log(`${hour}:0${min}:${sec}`);
        } else if (min < 10 && sec < 10) {
            console.log(`${hour}:${min}:0${sec}`);
        } else if (min < 10 & sec < 10) {
            console.log(`${hour}:0${min}:0${sec}`);
        } else {
            console.log(`${hour}:${min}:${sec}`);
        }

    }
}
timeToTalk(4000, 0.60, 5)
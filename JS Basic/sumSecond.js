function sumSeconds(input){
    let time1 = Number(input[0])
    let time2 = Number(input[1])
    let time3 = Number(input[2])
    let totalTimeSeconds = (time1 + time2 + time3)%60
    let totalTimeMinutes = Math.floor((time1 + time2 + time3)/60)

if(totalTimeSeconds < 10){
    console.log(`${totalTimeMinutes}:0${totalTimeSeconds}`)
}
else{
    console.log(`${totalTimeMinutes}:${totalTimeSeconds}`)
}

}
sumSeconds(["14", "12", "10"])
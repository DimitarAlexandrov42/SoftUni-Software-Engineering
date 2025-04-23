function onTimeForTheExam(input) {
    let examHour = Number(input[0])
    let examMin = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalmin = Number(input[3])

    let totalExamMin = (examHour * 60) + examMin
    let totalArrivalMin = (arrivalHour * 60) + arrivalmin

    let totalDiffTime = Math.abs(totalExamMin - totalArrivalMin)
    let diffHour = Math.floor(totalDiffTime / 60)
    let diffMin = totalDiffTime % 60

    if (totalExamMin === totalArrivalMin) {
        console.log(`On time`)
    }
    else if (totalExamMin < totalArrivalMin) {
        console.log(`Late`)

        if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes after the start`)
        } else {
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours after the start`)
            } else {
                console.log(`${diffHour}:${diffMin} hours after the start`)
            }
        }
    } else {
        if (totalDiffTime <= 30) {
            console.log(`On time`)
            console.log(`${totalDiffTime} minutes before the start`)
        } else {
            console.log(`Early`)
            if (totalDiffTime < 60) {
                console.log(`${totalDiffTime} minutes before the start`)
            } else {
                if (diffMin < 10) {
                    console.log(`${diffHour}:0${diffMin} hours before the start`)
                } else {
                    console.log(`${diffHour}:${diffMin} hours before the start`)
                }
            }
        }
    }
}



onTimeForTheExam(["16",

    "00", "14", "11"])
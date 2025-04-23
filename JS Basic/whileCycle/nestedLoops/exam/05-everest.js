function everest(input) {

    let metersClimbed = 5364
    let isClimbed = false

    index = 0
    let command = input[index]

    let dayCounter = 0
    let climbedMeters = 0

    while (command !== "END") {
        if (command === "END") {
   
            break
        }
        if (command === "Yes") {
            dayCounter++
        }
        else if (command === "No") {
            dayCounter
        }


        metersClimbed += climbedMeters
        command = input[index]
        index++


        if (metersClimbed >= 8848) {
            isClimbed = true
            break
        }
        if (dayCounter === 5 && metersClimbed < 8848) {
            isClimbed = false
            break
        }


        climbedMeters = Number(input[index])
        index++

    }
    if (isClimbed === true) {
        console.log(`Goal reached for ${dayCounter} days!`)
    }
     else {
        console.log(`Failed!`)
        console.log(`${metersClimbed}`)
    }

}
everest(["Yes",
    "535",
    "Yes",
    "849",
    "Yes",
    "499",
    "Yes",
    "400",
    "Yes",
    "500"])

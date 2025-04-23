function walking(input) {
    let goal = 10000
    index = 0
    let command = input[index]
    index++
    
    let sumOfSteps = 0

    while (command !== "Going home") {
        let steps = Number(command)

        sumOfSteps += steps

        if (goal <= sumOfSteps) {
            let moreSteps = sumOfSteps - goal
            console.log(`Goal reached! Good job!`)
            console.log(`${moreSteps} steps over the goal!`)
            break
        }
        command = input[index]
        index++
    } 
    
    
    if (command === "Going home") {
        let steps = Number(input[index])
        sumOfSteps += steps
        if (goal <= sumOfSteps) {
            let moreSteps = sumOfSteps - goal
            console.log(`Goal reached! Good job!`)
            console.log(`${moreSteps} steps over the goal!`)
    
        }else{
            let stepsNeeded = goal - sumOfSteps
            console.log(`${stepsNeeded} more steps to reach goal.`)
        }
    } 

}
walking(["125", "250", "4000", "30", "2678", "4682"])
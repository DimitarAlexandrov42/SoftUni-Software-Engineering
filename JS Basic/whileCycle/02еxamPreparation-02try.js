function examPreparation(input) {
    index = 0
    let maxNegativeGrades = Number(input[index])
    index++

    let command = input[index]
    index++
    let taskName = ""

    let gradeCounter = 0
    let negativeGradeCounter = 0
    let sumOfGrades = 0
    


    while (command !== "Enough") {
        taskName = command
        let grade = Number(input[index])
        index++
       
     if (grade <= 4) {
            negativeGradeCounter++
            if (negativeGradeCounter >= maxNegativeGrades) {
                break
            }
           
        }

        gradeCounter++
        sumOfGrades +=grade
        command = input[index]
        index++
        
        }if(command === "Enough"){
            let avgScore = sumOfGrades / gradeCounter
           console.log(`Average score: ${avgScore.toFixed(2)}`)
           console.log(`Number of problems: ${gradeCounter}`)
           console.log(`Last problem: ${taskName}`)
        }else{
           console.log(`You need a break, ${negativeGradeCounter} poor grades.`)
        }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
function trainTheTrainers(input) {

  index = 0
  let judgesNumber = Number(input[index])
  index++

  let command = input[index]
  index++

  let sumGrades = 0
  let gradesCounter = 0
  let subject = ""
  let avgGrade = 0
  let sumOfAllGrades = 0
  let counntOfAllGrades = 0


  while (command !== "Finish") {

      subject = command

      let grade = Number(input[index])
      index++

      while (command !== "Finish") {

          sumOfAllGrades +=grade
          counntOfAllGrades++

          gradesCounter++
          sumGrades += grade

          avgGrade = sumGrades / gradesCounter

          if (gradesCounter === judgesNumber) {
              console.log(`${subject} - ${avgGrade.toFixed(2)}.`)
              gradesCounter = 0 
              sumGrades = 0
              command = input[index]
              index++
            break
          }

          grade = Number(input[index])
          index++

      }

     

  }
    let finalGrade = sumOfAllGrades / counntOfAllGrades
   console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`)

}
trainTheTrainers(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])
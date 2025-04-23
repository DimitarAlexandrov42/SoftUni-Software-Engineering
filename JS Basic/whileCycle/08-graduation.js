function graduation(input) {
    index = 0
    let name = input[index]
    index++
    let sumOfGrades = 0
    let badGrades = 0
    let hasExcluded = false
    i = 1
    
    while (i <= 12) {
        let grade = Number(input[index])
  
        index++
        if (grade < 4.00) {
            badGrades++
            if (badGrades > 1) {
                hasExcluded = true
                console.log(`${name} has been excluded at ${i} grade`)
                break
            }
            continue
        }


        sumOfGrades += grade
        i++
    }
   if(!hasExcluded){
   let avgGrade = sumOfGrades / 12
   console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
}

}
graduation(["Gosho",

"5",

"5.5",

"6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
function challangeTheWedding(input) {

     let maleCount = Number(input[0])
     let femaleCount = Number(input[1])
     let maxTables = Number(input[2])
     let buff = ``

     let counterCombination = 0

     for (let m = 1; m <= maleCount; m++) {

          for (let f = 1; f <= femaleCount; f++) {
               counterCombination++

               buff += `(${m} <-> ${f})` + " "
               if (counterCombination == maxTables) {
                    break
               }
          }
          if (counterCombination == maxTables) {
               break
          }

     }
     console.log(buff)

}
challangeTheWedding(["2", "2", "3"])
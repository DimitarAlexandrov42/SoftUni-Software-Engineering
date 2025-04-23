function sumNumbers(input){
     index = 0 
     let num = Number(input[index])
     index++ 
     
     let sumOfComp = 0
     
     while(num > sumOfComp){
        let compare = Number(input[index])
        sumOfComp += compare
        index++
         }
  console.log(sumOfComp)

}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])




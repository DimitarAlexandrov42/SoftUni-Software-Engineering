function sumNumbers(input){
    index = 0
    let curNumber = Number(input[index])
    index++
    let num = Number(input[index])
    index++

    let sumNumbers = 0

    while(curNumber !== sumNumbers ){
        if(curNumber < sumNumbers){
            console.log(sumNumbers)
        }
        sumNumbers += num
        num = Number(input[index])
        index++
       
        
    }
    console.log(sumNumbers)
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])
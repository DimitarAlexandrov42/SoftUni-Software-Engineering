function traveling(input){

    index = 0
    let command = input[index]
    index++

    while(command !== "End"){
       let place = command
       let budget = Number(input[index])
       index++
       let currentMoney = 0 
       
       while(currentMoney < budget){
        let money = Number(input[index])
        index++
        currentMoney += money
       }
       console.log(`Going to ${place}!`)
         command = input[index]
         index++
    }
}
traveling(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])
function vacation(input) {
    index = 0
    let neededMoney = Number(input[index])
    index++

    let currentMoney = Number(input[index])
    index++

    let daysCouter = 0 
    let spendCounter = 0
    let isPossbileSaveMoney = true 

    while (currentMoney < neededMoney) {
        let command = input[index]
        index++
        let money = Number(input[index])
        index++
        daysCouter++
        switch (command) {
            case "spend":
                spendCounter++
                currentMoney -= money
                if (currentMoney < 0) {
                    currentMoney = 0
                }if(spendCounter === 5){
                    isPossbileSaveMoney = false
                }
              
                ; break;

            case "save":
                currentMoney += money
                spendCounter = 0
                    ; break;

        }if(!isPossbileSaveMoney){
            break
        }
     
         
    }
    if(isPossbileSaveMoney){
    console.log(`You saved the money for ${daysCouter} days.`)
    }else{
    console.log(`You can't save the money.`)
    console.log(`${daysCouter}`)


}
}
vacation(["110",

"60",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10","spend", "10"])
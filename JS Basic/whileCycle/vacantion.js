function vacantion(input){
    index = 0
    let excursionNeededMoney = Number(input[index])
    index++
    let avaliableMoney = Number(input[index])
    index++

    let spendCounter = 0
    let isPossbileToSaveMoney = true

       while(excursionNeededMoney < avaliableMoney){
        let action = input[index]
        index++
        let operationMoney = Number(input[index])
        index++

        switch(action){
         case "spend" : avaliableMoney-= operationMoney 
         spendCounter++
         if(avaliableMoney < 0){
            avaliableMoney = 0
         }if(spendCounter === 5){
            isPossbileToSaveMoney = false
            break
         }
           ;break;
         

         case "save" : avaliableMoney+= operationMoney;
           ;break;
        }
    }if(isPossbileToSaveMoney){
    console.log(`You saved the money for {общ брой изминали дни} days.`)
    }else{
    console.log(`You can't save the money.`)
    console.log(`${z}`)
    }



}
vacantion(["2000", "1000", "spend", "1200", "save", "2000"])
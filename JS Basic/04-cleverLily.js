function cleverLily(input){
    let lilyAge = input[0]
    let washerPrice = Number(input[1])
    let oneToyPrice = Number(input[2])

    let savings = 0
    let secondBdMoney = 10

    for(let i = 1 ; i <= lilyAge ; i++){
        if(i % 2 === 0){
            savings += (secondBdMoney -1)
            secondBdMoney +=10
        }else{
            savings += oneToyPrice
        }
        

    }if(savings >= washerPrice){
        let sumLeft = savings - washerPrice
        console.log(`Yes! ${sumLeft.toFixed(2)}`)
    }else{
        let sumNeeded = washerPrice - savings
        console.log(`No! ${sumNeeded.toFixed(2)}`)
    }
    
   
}
cleverLily(["10", "170.00", "6"])
function calculatorDeposit (input){
    let money = Number(input[0])
    let period = Number(input[1])
    let percent = Number(input[2])

    let annualinterestDecimal = percent / 100 
    let totalsum = money + period * ((money * annualinterestDecimal)/12)
    console.log(totalsum)
    
}
calculatorDeposit(["200","3","5.7"])
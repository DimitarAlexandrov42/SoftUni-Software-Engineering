function accountBalance(input){
    index = 0
    let command = input[index]
    index++ 
    let balance = 0


    while(command !== "NoMoreMoney"){
        
        let depsit = Number(command)
        if(depsit < 0){
           console.log(`Invalid operation!`)
           break
        }
        console.log(`Increase: ${depsit.toFixed(2)}`)
        balance += depsit
        command = input[index]
        index++
    }
    console.log(`Total: ${balance.toFixed(2)}`)
}
accountBalance(["120", "45.55", "-150"])
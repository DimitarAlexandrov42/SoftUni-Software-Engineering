function pipesInPool(input){
    let poolVolume = Number(input[0])
    let debitOfFirstPipePerHour = Number(input[1])
    let debitOfSecondPipePerHour = Number(input[2])
    let hourThatTheWorkerMiss = Number(input[3])

    let firstPipeWork = debitOfFirstPipePerHour * hourThatTheWorkerMiss
    let secondPipeWork = debitOfSecondPipePerHour * hourThatTheWorkerMiss
    let fullnessOfThePool = firstPipeWork + secondPipeWork

    let firstPipeWorkPercent = ((firstPipeWork / fullnessOfThePool) * 100).toFixed(2)
    let secondPipeWorkPercent = ((secondPipeWork / fullnessOfThePool) * 100).toFixed(2) 
    let poolFullnessPercent = (fullnessOfThePool / poolVolume) * 100

    if(poolFullnessPercent <= 100){
       console.log(`The pool is ${poolFullnessPercent}% full. Pipe 1: ${firstPipeWorkPercent}%. Pipe 2: ${secondPipeWorkPercent}%.`)
    }
    else{

       let overflow = fullnessOfThePool - poolVolume
       console.log(`For ${hourThatTheWorkerMiss} hours the pool overflows with ${overflow} liters.`)
    }
}

pipesInPool(["100","100","100","2.5"])
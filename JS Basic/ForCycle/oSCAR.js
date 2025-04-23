function oSCAR(input) {
    let nominee = input[0]
    let startingPoints = Number(input[1])
    let juryCount = Number(input[2])
 
   
    let namesLength = 0
    let juryScore = 0
    

    
    for (let i = 3; i < input.length; i++) {
        if (i % 2 === 1) {
            namesLength = (input[i].length)
        }
        if (i % 2 === 0) {
            juryScore = Number(input[i])
            
           startingPoints += namesLength * juryScore / 2
        }
        
    }
    if (startingPoints > 1250.5) {
        console.log(`Congratulations, ${nominee} got a nominee for leading role with ${startingPoints}!`)
    } else {
        let neededPoints = 1250.5 - startingPoints
        console.log(`Sorry, ${nominee} you need ${neededPoints} more!`)
    }

}
oSCAR(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])
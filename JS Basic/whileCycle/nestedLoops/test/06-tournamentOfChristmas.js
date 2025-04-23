function tournamentOfChristmas(input) {

    index = 0
    let tournamentDays = Number(input[index])
    index++

    let sport = input[index]
    index++

    let totalSum = 0 
    let winCounter = 0
    let loseCounter = 0
    let totalWinCounter = 0
    let totalLoseCounter = 0
    let totalSumPerDay = 0

    
    for(i = 0 ; i < tournamentDays ; i++){

        // let result = input[index]
        // index++


    while(sport !== "Finish"){
       
      

      let result = input[index]
      index++

       if(result === "win"){
            totalSum +=20
            winCounter++
            totalWinCounter++
        
       }else if(result === "lose"){
         loseCounter++
         totalLoseCounter++
       }


       sport = input[index]
       index++

    }
    if(winCounter > loseCounter){
        totalSum += totalSum*=0.10
        totalSumPerDay += totalSum
    }else{
        totalSumPerDay += totalSum
    }
    
    if(sport === "Finish"){
        loseCounter = 0
        winCounter = 0
        totalSum = 0
        sport = input[index]
        index++
    }
   


    }
    
    if(totalWinCounter > totalLoseCounter){
        totalSumPerDay += totalSumPerDay*=0.20
        console.log(`You won the tournament! Total raised money: ${totalSumPerDay.toFixed(2)}`)

    }else{
        console.log(`You lost the tournament! Total raised money: ${totalSumPerDay.toFixed(2)}`)
    }
    
}

tournamentOfChristmas(["3","darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"])





// while(command !== finish)
// if( command !== "Finish ")

// command = input[0]
// index ++
//               if(){

//               }else{

//               }




//               vsichko command 
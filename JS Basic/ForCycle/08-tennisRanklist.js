function tennisRanklist(input){
    let tournamentCount = Number(input[0])
    let startingPoints = Number(input[1])
    let gainPoint = 0
    let tournamentsWon = 0
    
    for(let i = 2; i <= tournamentCount + 1; i++){
        let tournamentStatus = input[i]
        if(tournamentStatus === "F"){
                gainPoint += 1200
        }else if( tournamentStatus === "SF"){
                gainPoint += 720
        }else if(tournamentStatus === 'W'){
                gainPoint += 2000
                tournamentsWon++
        }
        
    }
     let avaragePoints =   Math.floor(gainPoint / tournamentCount)
     let totalPoints = gainPoint + startingPoints
     let precentOfWins = (tournamentsWon/tournamentCount)*100
    console.log(`Final points: ${totalPoints}\nAverage points: ${avaragePoints}\n${precentOfWins.toFixed(2)}%`)
}
tennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"])
function oscar(input) {
    let actorName = input[0]
    let startingPoints = Number(input[1])
    let judgesCount = Number(input[2])
    
    for (i = 3; i < input.length; i+=2) {
        let judgeName = input[i]
        let judgeScore = Number(input[i + 1])
        let pointsWon = judgeName.length * judgeScore / 2
        startingPoints += pointsWon

        if (startingPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
            break;
        }

    } 
    if (startingPoints <= 1250.5) {
        let neededPoints = 1250.5 - startingPoints
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`)

    }

}
6


oscar(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])
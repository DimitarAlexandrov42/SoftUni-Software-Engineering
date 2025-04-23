function oscars(input) {
    let acclaimedActor = input[0]
    let startingPoints = Number(input[1])
    let juryNumber = Number(input[2])
    let juryLength = (juryNumber * 2)
    let totalScore = 0
    let nameN = 0
    let score = 0
    let sumOfTotalScoreBJ = 0
    let pointsForNomination = 1250.5
    for (i = 3; i <= juryLength + 2; i++) {
        if (i % 2 === 1) {
            nameN = (input[i].length)

        } else {
            score = input[i]
            totalScore = (nameN * score) / 2
            
            sumOfTotalScoreBJ += totalScore
            }
    }

    totalScore = sumOfTotalScoreBJ + startingPoints

    if (totalScore < pointsForNomination) {
        let neededPoints = pointsForNomination - totalScore
        console.log(`Sorry, ${acclaimedActor} you need ${neededPoints} more!`)
    } else if (totalScore >= pointsForNomination) {

        console.log(`Congratulations, ${acclaimedActor} got a nominee for leading role with ${totalScore}!`)
    }


}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])
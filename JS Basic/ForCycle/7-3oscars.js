function oscar(input){
    let actorName = input[0]
    let startingPoints = Number(input[1])
    let numJudges = Number(input[2])

for(let i = 3 ; i<= input.length-1 ; i+=2){
    if(startingPoints>1250.5){
        break;
     }
      let judgesName = input[i]
      let judgesPoints = judgesName.length
      let addPoints = Number(input[i+1])
      
      startingPoints+=(judgesPoints*addPoints)/2
}
if(startingPoints>1250.5){
    console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`)
}if(startingPoints <= 1250.5){
    let pointNeeded = 1250.5 - startingPoints
    console.log(`Sorry, ${actorName} you need ${pointNeeded.toExponential.toFixed(1)} more!`)
}

}
oscar(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])



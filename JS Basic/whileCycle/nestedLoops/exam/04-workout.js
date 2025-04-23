function workout(input){

    index = 0
    let days = Number(input[index])
    index++

    let runKm = Number(input[index])
    index++

    let totamKm = 0
    totamKm += runKm

    for(let i = 0 ; i < days ; i++){

        let nextRunPer = Number(input[index])

        let nextRunPerKm = runKm * (nextRunPer /100)

        let nextRunKm = runKm +  nextRunPerKm

        totamKm +=nextRunKm
         
          runKm = nextRunKm

        index++
       
       


    }
    if(Math.ceil(totamKm) >= 1000){
        let moreKm = totamKm - 1000 
        console.log(`You've done a great job running ${Math.ceil(moreKm)} more kilometers!`)
    }else{
        let neededKm = 1000 - totamKm
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(neededKm)} more kilometers`)

    }
    

}
workout(["5","30","10","15","20","5","12"])

function timePlus15Minutes(input){
    let hour = Number(input[0])
    let minutes = Number(input[1])

    let minToHour = hour * 60
    let totalTime = minutes + minToHour + 15

    let hour1 = Math.floor(totalTime/60)
    let minutes1 = (totalTime % 60)   

    if(hour1 === 24){
       hour1 = 0
    }
   
    if(minutes1 < 10){
    console.log (`${hour1}:0${minutes1}`)
    }
    else{
      console.log (`${hour1}:${minutes1}`)

    }
    }
timePlus15Minutes(["23","54"])
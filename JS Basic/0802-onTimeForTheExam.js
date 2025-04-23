function onTimeForTheExam(input){
   let examHour = Number(input[0])
   let examMin = Number(input[1])
   let arrivalHour = Number(input[2])
   let arrivalMin = Number(input[3])

   let totalExamMin = examHour * 60 + examMin
   let totalArrivalMin = arrivalHour * 60 + arrivalMin

   let diffTime = Math.abs(totalArrivalMin - totalExamMin)
   let diffHour = Math.floor(diffTime / 60)
   let diffMin = diffTime % 60

   if(totalExamMin === totalArrivalMin){
       console.log(`On time`)
   }else if(totalExamMin < totalArrivalMin){
          console.log(`Late`)
          if(diffTime < 60){
            console.log(`${diffTime} minutes after the start`)
            }else { 
                if(diffMin < 10){
                    console.log(`${diffHour}:0${diffMin} hours after the star`)
                 }else{
                    console.log(`${diffHour}:${diffMin} hours after the star`)
                }
            }
   }else{
         if(diffTime <= 30){
          console.log(`On time`)
          console.log((`${diffTime} minutes before the start`))
          }else{
            
                if(diffMin < 10){
                    console.log(`${diffHour}:0${diffMin} hours before the star`)
                 }else{
                    console.log(`${diffHour}:${diffMin} hours before the star`)
                }
          }
         
   }

}
onTimeForTheExam(["9",

"30",

"9",

"50"])
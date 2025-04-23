function movieStars(input){
   index = 0
   let budget = Number(input[index])
   index++

   let command = input[index]
   index++

   while(command !== "ACTION"){
      let actorName = command 
      let salary = 0
      index++
      if(actorName.length < 15){
        salary = Number(input[index])
         budget -=salary
      }else{
        salary = budget *20
        
      }

   
    if(budget < 0 ){
        break
    }
    command = input[index]
    index++
   }if(budget < 0){
    console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`)
  
   }else{
    console.log(`We are left with ${Math.abs(budget).toFixed(2)} leva.`)
   }
      

}
movieStars(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"])

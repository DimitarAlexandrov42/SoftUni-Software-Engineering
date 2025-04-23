function movingTarget(data){

    let targetAsString = data.shift().split(" ")
    let target = targetAsString.map(Number)

   let index = 0
   let command = data[index]
   index++

   while(command !== "End"){
    let allComands = command.split(" ")
      
     switch(allComands[0]){
        case "Shoot" :                 ;break
        case "Strike" :                 ;break
        case "Add" :                 ;break
        case "" :                 ;break

     }

    command = data[index]
    index++
   }




}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])

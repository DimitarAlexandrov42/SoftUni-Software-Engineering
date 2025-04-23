function cake(input){
     index = 0
     let cakeW = Number(input[index])
     index++

     let cakeL = Number(input[index])
     index++

     let command = input[index]
     index++

     let totalTakenPieces = 0
     let totalCakeVolume = cakeL * cakeW
     let onePiece = 1 
     let NumberOfPieces = 0
     
     

     while(command !== "STOP"){
        let piece = Number(command)
        
        totalTakenPieces += piece
        if(totalCakeVolume < totalTakenPieces){

            let NeededPieces = totalTakenPieces - totalCakeVolume
            NumberOfPieces = NeededPieces / onePiece
            console.log(`No more cake left! You need ${NeededPieces} pieces more.`)
            break
        }
        command = input[index]
        index++
     }
     if(command === "STOP"){
         let leftPieces = totalCakeVolume - totalTakenPieces
         NumberOfPieces = leftPieces / onePiece
         console.log(`${leftPieces} pieces are left.`)
     }

}
cake(["10",

"2",

"2",

"4",

"6",

"STOP"])
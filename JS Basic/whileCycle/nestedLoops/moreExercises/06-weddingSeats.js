function weddingSeats(input){
    let lastSector = input[0]
    let rowsNumFirstSector = Number(input[1])
    let numSeatoddRows = Number(input[2])

    let allSector = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let allPlaces = "abcdefghijklmnopqrstuvwxyz"


    let startS = allSector[0]
    let endS = ""
    let letter = ""

    let evenRowsC = 0
    let oddRowsC = 0

    let buff = ""


    for(let a = startS ; a <= allSector.length ; a++){
        letter = allSector[a]

       if(letter === lastSector){ 
         lastSector = endS
         endS = lastSector
       }
    }
    for(let b = startS ; b <= lastSector ; b++){

        for(let c = 1 ; c <= rowsNumFirstSector ; c++){
            if(c % 2 === 0){
                evenRowsC+=  numSeatoddRows+=2
            }else{
                evenRowsC+= numSeatoddRows
            }
            for(let d = allPlaces[0] ;  d <= allPlaces.length[evenRowsC] ; d++){
               buff += b, c , d 

            }



        }
      rowsNumFirstSector+=1
    }
console.log(buff)
}
weddingSeats(["B", "3", "2"])
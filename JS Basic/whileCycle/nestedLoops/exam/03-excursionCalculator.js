function excursionCalculator(input) {

    let peopleCount = Number(input[0])
    let season = input[1]
    
    let totalSum = 0

    switch (season) {
        case "spring": 
          if(peopleCount <= 5){
             totalSum = peopleCount * 50
          }else{
            totalSum = peopleCount * 48
          } ; break

        case "summer":
            if(peopleCount <= 5){
                totalSum = peopleCount * 48.50
             }else{
               totalSum = peopleCount * 45
             }
             totalSum *= 0.85 
             ; break

        case "autumn":
            if(peopleCount <= 5){
                totalSum = peopleCount * 60
             }else{
               totalSum = peopleCount * 49.50
             } ; break

        case "winter":
            if(peopleCount <= 5){
                totalSum = peopleCount * 86
             }else{
               totalSum = peopleCount * 85
             } 
             totalSum *= 1.08
             ; break
    }
     console.log(`${totalSum.toFixed(2)} leva.`)

}
excursionCalculator(["5", "spring"])
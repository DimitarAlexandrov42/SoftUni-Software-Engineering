function skiTrip(input) {
    let days = Number(input[0])
    let roomType = input[1]
    let score = input[2]
    let totalPrice = 0
    let nights = days - 1
    
    switch (roomType) {
        case "room for one person":
            let roomForOnePersonPrice = 18
            totalPrice = roomForOnePersonPrice * nights
            if(score === "positive"){
                totalPrice *=1.25
            }else if(score === "negative"){
                totalPrice *=0.90
            }
            ; break;
        case "apartment":
            let apartamentPrice = 25
            totalPrice = apartamentPrice * nights
            if (days < 10) {
                totalPrice *= 0.70
            } else if (10 <= days && days <= 15) {
                totalPrice *= 0.65
            } else if (days > 15) {
                totalPrice *= 0.5
            }if(score === "positive"){
                totalPrice *=1.25
            }else if(score === "negative"){
                totalPrice *=0.90
            }
             ; break ;
        case "president apartment":
            let presidentApartmentPrice = 35
            totalPrice = presidentApartmentPrice * nights
            if (days < 10) {
                totalPrice *= 0.90
            } else if (10 <= days && days <= 15) {
                totalPrice *= 0.85
            } else if (days > 15) {
                totalPrice *= 0.80
            } 
            if(score === "positive"){
                totalPrice *=1.25
            }else if(score === "negative"){
                totalPrice *=0.90
            }
            ; break ;
      }
 console.log(totalPrice.toFixed(2))
}
skiTrip(["30",

"president apartment",

"negative"])
function birthdayParty (input){


   let partyRoomPrice = Number(input)

   let cupCake = 0.20 * partyRoomPrice
   let drinks = cupCake * 0.55
   let animator = partyRoomPrice * 1/3

   let totalPrice = partyRoomPrice + cupCake + drinks + animator

   console.log(totalPrice.toFixed(1))
}
birthdayParty()
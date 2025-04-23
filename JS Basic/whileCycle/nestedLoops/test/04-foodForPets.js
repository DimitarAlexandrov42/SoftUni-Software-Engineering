function foodForPets(input){
    index = 0
    let days = Number(input[index])
    index++

    let totalFood = Number(input[index])
    index++

    let totalEatenFoodByDog = 0
    let totalEatenFoodByCat = 0 
    let dayCounter = 0
    let totalEatenBiscuits = 0
    let totalBiscuits = 0
   
    for(i = 1 ; i <= days ; i++){
         dayCounter++
        let foodEatenByDog = Number(input[index])
        index++
        totalEatenFoodByDog += foodEatenByDog

        let foodEatenByCat = Number(input[index])
        index++
        totalEatenFoodByCat += foodEatenByCat
       

        if(dayCounter % 3 === 0){
            // biscuitcounter
            dayCounter = 0
            let dogBiscuit = foodEatenByDog * 0.10
            let catBiscuit = foodEatenByCat * 0.10
            totalEatenBiscuits = catBiscuit + dogBiscuit
            totalBiscuits += totalEatenBiscuits
            dayCounter = 0
        }
         
          
    }
    let foodEatenByTheDogAndCat = totalEatenFoodByDog+totalEatenFoodByCat
    let totalPercentEatenFood = (foodEatenByTheDogAndCat)/totalFood *100
    console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`)
    console.log(`${totalPercentEatenFood.toFixed(2)}% of the food has been eaten.`)
   
    let percentEatenByTheCat = totalEatenFoodByCat / foodEatenByTheDogAndCat * 100
    let percentEatenByTheDog = totalEatenFoodByDog / foodEatenByTheDogAndCat * 100

    console.log(`${percentEatenByTheDog.toFixed(2)}% eaten from the dog.`)  
    console.log(`${percentEatenByTheCat.toFixed(2)}% eaten from the cat.`)  




    // console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`)
}
foodForPets(["9","3000","300","20","100","30","110","40","300","20","100","30","110","40","300","20","100","30","110","40"])



// counterforbiscuits 
// counterfordays
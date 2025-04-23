function coffeeMachine (input){

    let type = input[0]
    let sugar = input[1]
    let quantity = input[2]
    let price = 0

    switch(type){
        case "Espresso" : 
        switch(sugar){
            case "Without" :  price = quantity * 0.90 
                              price *=0.65 ; break
            case "Normal" : price = quantity * 1.00 ; break
            case "Extra"  : price = quantity * 1.20 ; break
        } if(quantity >= 5){
            price *=0.75
        }   ; break  

        case "Cappuccino" : 
        switch(sugar) {
        case "Without" : price = quantity * 1.00 
                         price *= 0.65 ; break  
                  
        case "Normal" :  price = quantity * 1.20 ; break 
        case "Extra"  :  price = quantity * 1.60 ; break
        }  ; break 
        case "Tea" :  
        switch(sugar){
            case "Without" : price = quantity * 0.50 
                         price *= 0.65 ; break  
                  
        case "Normal" :  price = quantity * 0.60 ; break 
        case "Extra"  :  price = quantity * 0.70 ; break
        }  ; break 




    }
    if(price > 15){
        price *=0.80
    }



console.log(`You bought ${quantity} cups of ${type} for ${price.toFixed(2)} lv.`)

}
coffeeMachine(["Espresso",
"Without",
"10"])

function smallShop(input) {
    let item = input[0]
    let city = input[1]
    let count = Number(input[2])
   
    if (city === "Sofia")
     {
        let coffee = 0.50
        let water = 0.80
        let beer = 1.20
        let sweets = 1.45
        let peanuts = 1.60
        switch (item) 
        {
            case "coffee": console.log(coffee * count); break
            case "water": console.log(water * count); break
            case "beer": console.log(beer * count); break
            case "sweets": console.log(sweets * count); break
            case "peanuts": console.log(peanuts * count); break
        }

    }
     else if (city === "Plovdiv"){
    
        coffee = 0.40
        water = 0.70
        beer = 1.15
        sweets = 1.30
        peanuts = 1.50

        switch(item){
        case "coffee": console.log(coffee * count); break
        case "water": console.log(water * count); break
        case "beer": console.log(beer * count); break
        case "sweets": console.log(sweets * count); break
        case "peanuts": console.log(peanuts * count); break}
    }else{
        coffee = 0.45
        water = 0.70
        beer = 1.10
        sweets = 1.35
        peanuts = 1.55
    switch(item){
        case "coffee": console.log(coffee * count); break
        case "water": console.log(water * count); break
        case "beer": console.log(beer * count); break
        case "sweets": console.log(sweets * count); break
        case "peanuts": console.log(peanuts * count); break}
    }
    }    
smallShop(["water", "Plovdiv", "7"])

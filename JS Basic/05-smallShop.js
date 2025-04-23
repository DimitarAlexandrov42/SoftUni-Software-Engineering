function smallShop(input) {
    let item = input[0]
    let city = input[1]
    let count = Number(input[2])
    let money = 0
    switch (city) {
        case "Sofia":

            switch (item) {
                case "coffee": money = count * 0.50; break
                case "water": money = count * 0.80; break
                case "beer": money = count * 1.20; break
                case "sweets": money = count * 1.45; break
                case "peanuts": money = count * 1.60; break
            }
        case "Plovdiv":
            switch(item){
                case "coffee": money = count * 0.40; break
                case "water": money = count * 0.70; break
                case "beer": money = count * 1.15; break
                case "sweets": money = count * 1.30; break
                case "peanuts": money = count * 1.50; break
           }
         case"Varna":
             switch(item) 
             {
                case "coffee": money = count * 0.45; break
                case "water": money = count * 0.70; break
                case "beer": money = count * 1.10; break
                case "sweets": money = count * 1.35; break
                case "peanuts": money = count * 1.55; break
             }
    }
    console.log(money)
}
smallShop(["coffee", "Varna", "7"])

function fruitShop(input) {
    let fruit = input[0]
    let day = input[1]
    let count = Number(input[2])
    let money = 0

    switch (day) {
        case "Monday":
            switch(fruit){
                case "banana": money = count * 2.50 ; console.log(money.toFixed(2)) ;break;
                case "apple": money = count * 1.20 ; console.log(money.toFixed(2)) ;break;
                case "orange": money = count * 0.85 ; console.log(money.toFixed(2)) ;break;
                case "grapefruit": money = count * 1.45 ; console.log(money.toFixed(2)) ;break;
                case "kiwi": money = count * 2.70 ; console.log(money.toFixed(2)) ;break;
                case "pineapple": money = count * 5.50  ; console.log(money.toFixed(2)) ;break;
                case "grapes": money = count * 3.85 ; console.log(money.toFixed(2)) ;break;
                default: console.log("error");break;
            }; break;
        case "Tuesday": switch (fruit) {
            case "banana": money = count * 2.50  ; console.log(money.toFixed(2)) ;break;
            case "apple": money = count * 1.20  ; console.log(money.toFixed(2)) ;break;
            case "orange": money = count * 0.85  ; console.log(money.toFixed(2)) ;break;
            case "grapefruit": money = count * 1.45 ; console.log(money.toFixed(2)) ;break;
            case "pineapple": money = count * 5.50  ; console.log(money.toFixed(2)) ;break;
            case "grapes": money = count * 3.85  ; console.log(money.toFixed(2)) ;break;
            default: console.log("error");break;

        }; break;
        case "Wednesday": switch (fruit) {
            case "banana": money = count * 2.50  ; console.log(money.toFixed(2)) ;break;
            case "apple": money = count * 1.20  ; console.log(money.toFixed(2)) ;break;
            case "orange": money = count * 0.85  ; console.log(money.toFixed(2)) ;break;
            case "grapefruit": money = count * 1.45 ; console.log(money.toFixed(2)) ;break;
            case "pineapple": money = count * 5.50  ; console.log(money.toFixed(2)) ;break;
            case "grapes": money = count * 3.85  ; console.log(money.toFixed(2)) ;break;
            default: console.log("error");break;

        }; break;
        case "Thursday": switch (fruit) {
            case "banana": money = count * 2.50  ; console.log(money.toFixed(2)) ;break;
            case "apple": money = count * 1.20  ; console.log(money.toFixed(2)) ;break;
            case "orange": money = count * 0.85  ; console.log(money.toFixed(2)) ;break;
            case "grapefruit": money = count * 1.45 ; console.log(money.toFixed(2)) ;break;
            case "pineapple": money = count * 5.50  ; console.log(money.toFixed(2)) ;break;
            case "grapes": money = count * 3.85  ; console.log(money.toFixed(2)) ;break;
            default: console.log("error");break;

        }; break;
        case "Friday": switch (fruit) {
            case "banana": money = count * 2.50  ; console.log(money.toFixed(2)) ;break;
            case "apple": money = count * 1.20  ; console.log(money.toFixed(2)) ;break;
            case "orange": money = count * 0.85  ; console.log(money.toFixed(2)) ;break;
            case "grapefruit": money = count * 1.45 ; console.log(money.toFixed(2)) ;break;
            case "pineapple": money = count * 5.50  ; console.log(money.toFixed(2)) ;break;
            case "grapes": money = count * 3.85  ; console.log(money.toFixed(2)) ;break;
            default: console.log("error");break;

        }; break;
        case "Saturday": switch (fruit) {
            case "banana": money = count * 2.70 ; console.log(money.toFixed(2)) ;break;
            case "apple": money = count * 1.25  ; console.log(money.toFixed(2)) ;break;
            case "orange": money = count * 0.90 ;  console.log(money.toFixed(2)) ;break;
            case "grapefruit": money = count * 1.60 ; console.log(money.toFixed(2)) ;break;
            case "kiwi": money = count * 3.00 ; console.log(money.toFixed(2)) ;break;
            case "pineapple": money = count * 5.60; console.log(money.toFixed(2)) ;break;
            case "grapes": money = count * 4.20; console.log(money.toFixed(2)) ;break;
            default: console.log("error");break;

        }; break;
        case "Sunday": switch  (fruit) {
            case "banana": money = count * 2.70 ; console.log(money.toFixed(2)) ;break;
            case "apple": money = count * 1.25  ; console.log(money.toFixed(2)) ;break;
            case "orange": money = count * 0.90 ;  console.log(money.toFixed(2)) ;break;
            case "grapefruit": money = count * 1.60 ; console.log(money.toFixed(2)) ;break;
            case "kiwi": money = count * 3.00 ; console.log(money.toFixed(2)) ;break;
            case "pineapple": money = count * 5.60; console.log(money.toFixed(2)) ;break;
            case "grapes": money = count * 4.20; console.log(money.toFixed(2)) ;break;
            default: console.log("error");break;

        }; break;
        default: console.log("error"); break;
        
    }
    
}
fruitShop(["kur", "kur", "1"])
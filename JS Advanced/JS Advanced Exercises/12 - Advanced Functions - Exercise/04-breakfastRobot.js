function solution() {

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function manager(info) {

        let recipeNeeded = {
            apple: {
                carbohydrate: 1,
                flavour: 2
            },
            lemonade: {
                carbohydrate: 10,
                flavour: 20
            },
            burger: {
                carbohydrate: 5,
                fat: 7,
                flavour: 3
            },
            eggs: {
                protein: 5,
                fat: 1,
                flavour: 1
            },
            turkey: {
                protein: 10,
                carbohydrate: 10,
                fat: 10,
                flavour: 10

            }
        }

        let [command, microelement, quantity] = info.split(" ")


        if (command === "restock") {
            store[microelement] += Number(quantity)
            return "Success"

        } else if (command === "prepare") {
            "prepare lemonade 4"
            for (const key in recipeNeeded[microelement]) {
              
                if (store[key] < recipeNeeded[microelement][key] * quantity) {
                    return `Error: not enough ${key} in stock`
                } else {
                    store[key] -= recipeNeeded[microelement][key] * quantity
                }
            }
            return "Success"
        } else if (command === "report") {
            return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`

        }
    }
}
let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager("report"));



// --------------------------------------------
// console.log(manager("report"));
// console.log(manager("report"));
// console.log(manager("report"));
// console.log(manager("report"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));
// console.log(manager("prepare lemonade 4"));

// •	Success - when restocking or completing cooking without errors
// •	Error: not enough <ingredient> in stock - when the robot couldn’t muster enough microelements
// •	protein={qty} carbohydrate={qty} fat={qty} flavour={qty} - when a report is requested, in a single string

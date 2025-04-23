function needForSpeed3(arr) {

    let carsCount = arr.shift()

    let result = {}

    for (let i = 0; i < carsCount; i++) {
        let [car, distance, fuel] = arr[i].split('|')

        result[car] = [Number(distance), Number(fuel)]

    }
    for (let l = carsCount; l < arr.length; l++) {
        let [...tokens] = arr[l].split(' : ')

        switch (tokens[0]) {
            case 'Drive':
                if (result[tokens[1]][1] < Number(tokens[3])) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    result[tokens[1]][0] += Number(tokens[2])
                    result[tokens[1]][1] -= Number(tokens[3])

                    console.log(`${tokens[1]} driven for ${tokens[2]} kilometers. ${tokens[3]} liters of fuel consumed.`);
                    if (result[tokens[1]][0] > 100000) {
                        
                        console.log(`Time to sell the ${tokens[1]}!`);
                        delete result[tokens[1]]
                       
              }
                }
                ; break
            case 'Refuel':
                let currFuel = result[tokens[1]][1]
                result[tokens[1]][1] += Number(tokens[2])
                if (result[tokens[1]][1] > 75) {
                    result[tokens[1]][1] = 75
                    let refuel = 75 - Number(currFuel)
                    console.log(`${tokens[1]} refueled with ${refuel} liters`);
                }else{
                console.log(`${tokens[1]} refueled with ${tokens[2]} liters`);
                }
                ; break
            case 'Revert':
                result[tokens[1]][0] -= Number(tokens[2])
                if (result[tokens[1]][0] < 10000) {
                    result[tokens[1]][0] = 10000
                } if (result[tokens[1]][0] > 10000) {
                    console.log(`${tokens[1]} mileage decreased by ${tokens[2]} kilometers`)
                }
                ; break
        }

    }

    let entries = Object.entries(result)

    for (const [key, value] of entries) {
        console.log(`${key} -> Mileage: ${value[0]} kms, Fuel in the tank: ${value[1]} lt.`);

    }
}
needForSpeed3([
    `4`,
    `Lamborghini Veneno|11111|74`,
    `Bugatti Veyron|12345|67`,
    `Koenigsegg CCXR|67890|12`,
    `Aston Martin Valkryie|99900|50`,
    `Drive : Koenigsegg CCXR : 382 : 82`,
    `Drive : Aston Martin Valkryie : 99 : 23`,
    `Drive : Aston Martin Valkryie : 2 : 1`,
    `Refuel : Lamborghini Veneno : 40`,
    `Revert : Bugatti Veyron : 2000`,
    `Stop`])
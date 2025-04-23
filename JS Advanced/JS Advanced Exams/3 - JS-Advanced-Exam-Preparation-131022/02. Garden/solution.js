class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable)
        this.plants = []
        this.storage = []
    }

    addPlant(plantName, spaceRequired) {
        spaceRequired = Number(spaceRequired)
        this.plantName = plantName
        if (this.spaceAvailable - spaceRequired < 0) {
            throw new Error("Not enough space in the garden.")
        } else {
            this.spaceAvailable -= spaceRequired
            this.plants.push({
                plantName: plantName,
                spaceRequired: spaceRequired,
                ripe: false,
                quantity: 0
            })

            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {
        quantity = Number(quantity)

        let currPlant = this.plants.find(x => x.plantName === plantName)

        if (!currPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (currPlant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        if (quantity === 1) {
            currPlant.ripe = true
            currPlant.quantity += quantity

            return `${quantity} ${plantName} has successfully ripened.`
        }
        if (quantity > 1) {
            currPlant.ripe = true
            currPlant.quantity += quantity

            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {

        let currPlant = this.plants.find(x => x.plantName === plantName)


        if (!currPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }





        if (currPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        } else {
            let index = this.plants.indexOf(currPlant)
            this.storage.push({
                plantName: currPlant.plantName,
                quantity: currPlant.quantity
            })
            this.spaceAvailable += currPlant.spaceRequired
            this.plants.splice(index, 1)
            return `The ${plantName} has been successfully harvested.`
        }

    }

    generateReport() {
        let plantsNames = []

        let buff = ""
        buff += `The garden has ${this.spaceAvailable} free space left.\n`
        buff += `Plants in the garden: `
        for (const plant of this.plants) {
            plantsNames.push(plant.plantName);
        }
        plantsNames.sort((a, b) => a.localeCompare(b))
        buff += plantsNames.join(", ") + "\n"

        if (this.storage.length === 0) {
            return buff += `Plants in storage: The storage is empty.`
        } else {
            buff += `Plants in storage: `

            this.storage.forEach(x => buff += `${x.plantName} (${x.quantity}), `)

            buff = buff.substring(0, buff.length - 2)
            return buff
        }
    }
}

// const myGarden = new Garden(250)

// myGarden.addPlant("Roza", 122)
// myGarden.addPlant("Lale", 11)
// myGarden.addPlant("Kokiche", 17)
// myGarden.addPlant("Minzuhar", 5)

// console.log(myGarden.ripenPlant("Roza", 22))
// console.log(myGarden.ripenPlant("Minzuhar", 7))
// console.log(myGarden.ripenPlant("Kokiche", 17))
// console.log(myGarden.ripenPlant("Lale", 2))




// console.log(myGarden.harvestPlant("Minzuhar"));
// console.log(myGarden.harvestPlant("Roza"));
// console.log(myGarden.harvestPlant("Lale"));
// console.log(myGarden.harvestPlant("Kokiche"));
// console.log(myGarden.generateReport());

const myGarden = new Garden(250)

console.log(myGarden.addPlant('apple', 20));

console.log(myGarden.addPlant('orange', 200));

console.log(myGarden.addPlant('raspberry', 10));

console.log(myGarden.ripenPlant('apple', 10));

console.log(myGarden.ripenPlant('orange', 1));

console.log(myGarden.harvestPlant('orange'));

console.log(myGarden.generateReport());




// Unexpected error: expected 'he garden has 220 free space left\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)' to equal
//                          'The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)'


// Unexpected error: expected 'The garden has 220 free space left\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)' to equal
//                         'The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)'




Unexpected error: expected 'The garden has 220 free space left\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)' to equal 
                           'The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)'
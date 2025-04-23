class BikeRentalService {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.availableBikes = []
    }

    addBikes(bikes) {

        let buff = []
        let addedBikes = []

        buff.push(`Successfully added`)

        for (const x of bikes) {
            let [brand, quantity, price] = x.split('-')

            quantity = Number(quantity)
            price = Number(price)

            let currBike = this.availableBikes.find(x => x.brand === brand)

            if (currBike === undefined) {
                this.availableBikes.push(
                    { brand, quantity, price }
                )
            }
            else if (currBike && currBike.price < price) {
                if(quantity>0){
                    currBike.quantity += quantity
                }
                currBike.price = price
            }
           
        }

        for (const x of this.availableBikes) {
            let currBrand = x.brand
            addedBikes.push(currBrand)
        }
        return buff.concat(addedBikes.join(', ')).join(' ')
    }


    rentBikes(selectedBikes) {
        // (["Mountain Bike-2", "City Bike-5"]); 

        let totalPrice = 0

        for (const x of selectedBikes) {
            let [brand, quantity] = x.split('-')
      
          
            let currBike = this.availableBikes.find(x => x.brand === brand)

            if (!currBike || currBike.quantity < quantity) {
                return "Some of the bikes are unavailable or low on quantity in the bike rental service."
            } else {
                totalPrice += currBike.price * quantity
                currBike.quantity -= quantity
            }

        }

        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`

    }

    returnBikes(returnedBikes) {

        for (const x of returnedBikes) {
            let [brand, quantity] = x.split('-')

            let currBike = this.availableBikes.find(x => x.brand === brand)

            if (!currBike) {
                return "Some of the returned bikes are not from our selection."
            } else {
                currBike.quantity += Number(quantity)
            }
        }
        return "Thank you for returning!"
    }

    revision() {

        let buff = []
        buff.push("Available bikes:")



        for (const x of this.availableBikes.sort((a, b) => a.price - b.price)) {
            buff.push(`${x.brand} quantity:${x.quantity} price:$${x.price}`)
        }
        buff.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`)
        return buff.join('\n')

    }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");



console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]))

console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]))

console.log(rentalService.returnBikes(["Mountain Bike-2", "City Bike-3"]));

console.log(rentalService.revision());


// const BikeRentalService = result;
// let Rental = new BikeRentalService("MyBikes", "CityCenter");

// assert.equal(Rental.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"])
// , "Successfully added Mountain Bike, City Bike, Electric Bike");
// assert.equal(Rental.rentBikes(["Mountain Bike-2", "City Bike-5"]), "Enjoy your ride! You must pay the following amount $800.00.");
// assert.equal(Rental.returnBikes(["Mountain Bike-2", "City Bike-3"]), "Thank you for returning!");
// assert.equal(Rental.revision(), "Available bikes:\nCity Bike quantity:8 price:$100\nMountain Bike quantity:5 price:$150\nElectric Bike quantity:11 price:$400\nThe name of the bike rental service is MyBikes, and the location is CityCenter.");
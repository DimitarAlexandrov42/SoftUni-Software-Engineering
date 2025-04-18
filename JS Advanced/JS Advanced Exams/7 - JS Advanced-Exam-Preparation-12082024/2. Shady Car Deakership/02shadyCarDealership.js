class ShadyCarDealership {

    constructor(dealerName) {
        this.dealerName = dealerName
        this.availableCars = []
        this.soldCars = []
        this.revenue = Number(0)
    }


    addCar(model, year, mileage, price) {

        if (model == "" || year <= 1950 || mileage < 0 || price < 0) {
            throw new Error("Invalid car!")
        }

        this.availableCars.push({
            model,
            year,
            mileage,
            price
        })

        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`

    }

    sellCar(model, desiredYear) {

        desiredYear = Number(desiredYear)

        let findCar = this.availableCars.find(x => x.model === model)

        let carIndex = this.availableCars.indexOf(findCar)

        if (!findCar) {
            return `${model} was not found!`

        } else if (findCar.year >= desiredYear) {

            this.soldCars.push({
                model: findCar.model,
                year: findCar.year,
                mileage: findCar.mileage,
                soldPrice: Number(findCar.price)
            })
            this.availableCars.splice(carIndex, 1)

            return `${model} (${findCar.year}) was sold for ${(findCar.price).toFixed(2)}$`

        } else if (Math.abs(desiredYear - findCar.year) <= 5) {
            findCar.price = (findCar.price * 0.90)
            this.soldCars.push({
                model: findCar.model,
                year: findCar.year,
                mileage: findCar.mileage,
                soldPrice: Number(findCar.price)
            })
            this.availableCars.splice(carIndex, 1)
            return `${model} (${findCar.year}) was sold for ${(findCar.price).toFixed(2)}$`

        } else if (Math.abs(desiredYear - findCar.year) > 5) {
            findCar.price = (findCar.price * 0.80)
            this.soldCars.push({
                model: findCar.model,
                year: findCar.year,
                mileage: findCar.mileage,
                soldPrice: Number(findCar.price)
            })
            this.availableCars.splice(carIndex, 1)
            return `${model} (${findCar.year}) was sold for ${(findCar.price).toFixed(2)}$`

        }

    }

    prepareCarForSale(model) {

        let findCar = this.availableCars.find(x => x.model === model)

        if (!findCar) {
            return `${model} was not found for preparation!`

        } else {
            findCar.mileage *= 0.50
            findCar.price *= 1.30

            return `${model} (${findCar.year}) is prepared for sale with ${findCar.mileage} km. - ${findCar.price.toFixed(2)}$`
        }


    }

    salesJournal(criteria) {

        this.soldCars.forEach(x => this.revenue += x.soldPrice)
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        if (criteria === 'year') {
            this.soldCars.sort((a, b) => b.year - a.year);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [];
        result.push(`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(car => result.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`));

        return result.join('\n');
    }

}
const dealership = new ShadyCarDealership('Shady Motors');

console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));

console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));

console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));

console.log(dealership.prepareCarForSale('Honda CR-V'));

console.log(dealership.prepareCarForSale('BMW X3'));

console.log(dealership.sellCar('Honda CR-V', 2012));

console.log(dealership.sellCar('BMW X3', 2012));

console.log(dealership.salesJournal('model')); 
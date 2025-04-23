class VegetableStore {

    constructor(owner, location) {
        this.owner = owner
        this.location = location
        this.availableProducts = []
    }

    loadingVegetables(vegetables) {
        let buff = `Successfully added `
        let arr = []
        for (const x of vegetables) {
            let [type, quantity, price] = x.split(" ")
            quantity = Number(quantity)
            price = Number(price)

            let currProduct = this.availableProducts.find(x => x.type === type)

            if (currProduct) {


                currProduct.quantity += quantity

                if (currProduct.price < price) {
                    currProduct.price = price
                }
            } else {

                this.availableProducts.push({
                    type: type,
                    quantity: quantity,
                    price: price
                })
            }

        }
        for (const x of this.availableProducts) {
            arr.push(x.type)
        }

        buff += arr.join(", ")
        return buff
    }

    buyingVegetables(selectedProducts) {

        let totalPrice = 0

        for (const x of selectedProducts) {
            let [type, quantity] = x.split(" ")

            let currProduct = this.availableProducts.find(x => x.type === type)

            if (!currProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (currProduct.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                totalPrice += currProduct.price * quantity
                currProduct.quantity -= quantity

            }


        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let currProduct = this.availableProducts.find(x => x.type === type)

        if (!currProduct) {
            throw new Error(`${type} is not available in the store.`)
        }
        if (currProduct.quantity < quantity) {
            currProduct.quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        } else {
            currProduct.quantity -= quantity
            return `Some quantity of the ${type} has been removed.`
        }

    }

    revision() {
        let buff = `Available vegetables:\n`
        let sortedArr = this.availableProducts.sort((a, b) => a.price - b.price)
        
        for (const x of sortedArr) {
            buff += `${x.type}-${x.quantity}-$${x.price}\n`
        }
        buff += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return buff
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8",

"Celery 5.5 2.2", "Celery 0.5 2.5"]));

console.log(vegStore.rottingVegetable("Okra", 1));

console.log(vegStore.rottingVegetable("Okra", 2.5));

console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));



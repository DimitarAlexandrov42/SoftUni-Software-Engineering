function orders(product, count) {
    let price = 0
    switch (product) {
        case "coffee":
            price = 1.50
            console.log(`${(price * count).toFixed(2)}`);
            ; break
        case "water":
            price = 1.00
            console.log(`${(price * count).toFixed(2)}`)
                ; break
        case "coke":
            price = 1.40
            console.log(`${(price * count).toFixed(2)}`)
                ; break
        case "snacks":
            price = 2.00
            console.log(`${(price * count).toFixed(2)}`)
                ; break
    }

}
orders('water', 5)
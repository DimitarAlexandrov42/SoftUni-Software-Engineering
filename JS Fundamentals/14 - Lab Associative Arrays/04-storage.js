function storage(arr) {

    let obj = {}

    for (const line of arr) {
        let [item, quantity] = line.split(' ')
        quantity = Number(quantity)
        if (obj.hasOwnProperty(item)) {
            obj[item] += quantity
        } else {
            obj[item] = quantity
        }
    }
    for (const [key,value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])
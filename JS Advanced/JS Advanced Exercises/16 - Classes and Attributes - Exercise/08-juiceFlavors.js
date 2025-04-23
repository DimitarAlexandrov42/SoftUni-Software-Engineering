function juiceFlavours(arr) {

    let storage = {}
    let bottles = {}
    let buff = ''

    for (const line of arr) {
        let [fruit, quantity] = line.split(' => ')

        if (!storage.hasOwnProperty(fruit)) {
            storage[fruit] = Number(quantity)
        } else {
            storage[fruit] += Number(quantity)
        }


        if (storage[fruit] / 1000 >= 1) {
            let bottle = Math.floor(storage[fruit] / 1000)
            storage[fruit] -= bottle * 1000
            if (!bottles.hasOwnProperty(fruit)) {
                bottles[fruit] = bottle
            } else {
                bottles[fruit] += bottle
            }
        }

    }
    for (const [key, value] of Object.entries(bottles)) {
        buff += `${key} => ${value}\n`
    }

    return buff.trim()


}
juiceFlavours(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])
function train(arr) {

    let wagons = arr.shift().split(" ").map(Number)
    let maxCapacity = arr.shift()



    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ")
        if (command[0] === "Add") {
            wagons.push(Number(command[1]))
        } else {
            let passangers = Number(command[0])

            for (let s = 0; s <= wagons.length; s++) {
                if (maxCapacity - wagons[s] >= passangers) {
                    wagons[s] += passangers
                    break
                }
            }
        }
    }
    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)
function firstTask(arr) {

    let days = arr.shift()
    let players = arr.shift()
    let groupsEnergy = arr.shift()
    let waterPerPlayer = arr.shift()
    let foodPerPlayer = arr.shift()

    let waterSuplies = waterPerPlayer * days * players
    let foodSuplies = foodPerPlayer * days * players

    let dayCount = 0
    let lostEnergy = 0

    for (let i = 0; i < arr.length; i++) {
        dayCount++
        let foodThatTheyConsume = foodSuplies / players
        lostEnergy = arr[i]

        groupsEnergy = groupsEnergy - lostEnergy
        if (groupsEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${foodSuplies.toFixed(2)} food and ${waterSuplies.toFixed(2)} water.`);
            break
        }
        if (dayCount % 2 === 0) {
            groupsEnergy *= 1.05
            waterSuplies *= 0.70
        }
        if (dayCount % 3 === 0) {
            groupsEnergy *= 1.10
            foodSuplies -= foodThatTheyConsume
        }
    }

    if (groupsEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
    }
}
firstTask([12,

    6,

    4430,

    9.8,

    5.5,

    620.3,

    840.2,

    960.1,

    220,

    340,

    674,

    365,

    345.5,

    212,

    412.12,

    258,

    496])
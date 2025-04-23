function trekkingMania(input) {
    let groupsCount = Number(input[0])

    let groupsMusala = 0
    let groupMonblan = 0
    let groupKalimandjaro = 0
    let groupK2 = 0
    let groupEverest = 0
    let totalPeople = 0
    let allPeople = 0

    let groupCountIndex = 1
    for (let i = 1; i < input.length; i++) {
        allPeople = Number(input[i])
        totalPeople += allPeople

        if (allPeople <= 5) {
            groupsMusala += allPeople

        } else if (allPeople >= 6 && allPeople <= 12) {
            groupMonblan += allPeople

        } else if (allPeople >= 13 && allPeople <= 25) {
            groupKalimandjaro += allPeople
        } else if (allPeople >= 26 && allPeople <= 40) {
            groupK2 += allPeople

        } else if (allPeople >= 41) {
            groupEverest += allPeople
        }
    }

    let musalaPer = (groupsMusala / totalPeople) * 100
    let monblanPer = (groupMonblan / totalPeople) * 100
    let kalimandjaroPer = (groupKalimandjaro / totalPeople) * 100
    let K2Per = (groupK2 / totalPeople) * 100
    let everestPer = (groupEverest / totalPeople) * 100
    console.log(`${musalaPer.toFixed(2)}%`)
    console.log(`${monblanPer.toFixed(2)}%`)
    console.log(`${kalimandjaroPer.toFixed(2)}%`)
    console.log(`${K2Per.toFixed(2)}%`)
    console.log(`${everestPer.toFixed(2)}%`)




}
trekkingMania
    (["5",

        "25",

        "41",

        "31",

        "250",

        "6"])
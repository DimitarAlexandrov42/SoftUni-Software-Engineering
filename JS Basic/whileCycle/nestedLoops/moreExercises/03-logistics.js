function logistics(input) {
    index = 0
    let cargoCount = Number(input[index])
    index++

    let cargoTons = Number(input[index])
    index++
    let totalTons = 0

    let busTons = 0
    let truckTons = 0
    let trainTons = 0

    let busPrice = 0
    let truckPrice = 0
    let trainPrice = 0


    for (let i = 0; i < cargoCount; i++) {

        totalTons += cargoTons

        if (cargoTons <= 3) {
            busTons += cargoTons
            busPrice = busTons * 200
        } else if (cargoTons > 3 && cargoTons <= 11) {
            truckTons += cargoTons
            truckPrice = truckTons * 175
        } else {
            trainTons += cargoTons
            trainPrice = trainTons * 120
        }



        cargoTons = Number(input[index])
        index++

    }

    let avgPrice = (busPrice + truckPrice + trainPrice) / totalTons
    let busPercent = busTons / totalTons *100
    let truckPercent = truckTons / totalTons *100
    let trainPercent = trainTons / totalTons *100



    console.log(avgPrice.toFixed(2))
    console.log(`${busPercent.toFixed(2)}%`)
    console.log(`${truckPercent.toFixed(2)}%`)
    console.log(`${trainPercent.toFixed(2)}%`)



}
logistics(["4", "1", "5", "16", "3"])
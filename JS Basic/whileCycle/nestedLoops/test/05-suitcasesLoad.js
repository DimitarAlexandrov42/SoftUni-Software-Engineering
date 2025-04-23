function suitcaseLoad(input) {
    index = 0
    let trunkCapacity = Number(input[index])
    index++

    let command = input[index]
    index++

    let loadCounter = 0

    while (command !== "End") {
        loadCounter++

        let load = Number(command)

        if (loadCounter % 3 === 0) {

            load *= 1.10
        }
        if (trunkCapacity < load) {
            loadCounter--
            console.log(`No more space!`);
            break;
        }

        trunkCapacity -= load

        if (trunkCapacity < 0) {
            console.log(`No more space!`)
            break

        }

        command = input[index]
        index++
    }
    if (command === "End") {
        console.log(`Congratulations! All suitcases are loaded!`)
    }
    
    console.log(`Statistic: ${loadCounter} suitcases loaded.`)
}
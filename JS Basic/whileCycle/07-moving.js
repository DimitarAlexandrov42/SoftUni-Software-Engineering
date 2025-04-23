function moving(input) {
    index = 0
    let w = Number(input[index])
    index++

    let l = Number(input[index])
    index++

    let h = Number(input[index])
    index++

    let sumOfBoxs = 0

    let volumeOfTheRoom = w * l * h

    let command = input[index]

    while (command !== "Done") {

        let box = Number(command)

        sumOfBoxs += box
        index++
        if (sumOfBoxs > volumeOfTheRoom) {
            let neededSpace = sumOfBoxs - volumeOfTheRoom
            console.log(`No more free space! You need ${neededSpace} Cubic meters more.`)
            break
        }

        command = input[index]
    }
    if (sumOfBoxs <= volumeOfTheRoom) {
        let freeSpace = volumeOfTheRoom - sumOfBoxs
        console.log(`${freeSpace} Cubic meters left.`)

    }
}
moving(["10",

    "10",

    "2", "20", "20", "20", "20", "122"])
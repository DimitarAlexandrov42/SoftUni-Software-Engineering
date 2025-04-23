function extract(content) {
    // let para = document.getElementById(content).textContent
    let string = content
    let pattern = /\(([^)]+)\)/g
    let result = []

    let match = pattern.exec(string)
    while (match) {
        result.push(match[1])
        match = pattern.exec(string)

    }
    console.log(result.join("; "))
}
extract(' The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).')
function piccolo(arr) {

    let obj = {}

    for (const line of arr) {
        let [command, number] = line.split(', ')

        if (command === "IN") {
            obj[number] = command
        } else if (command === "OUT") {
            delete obj[number]
        }
    }
    let sortedArr = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))

    for (const [number, command] of sortedArr) {
        console.log(number);
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',

]
)
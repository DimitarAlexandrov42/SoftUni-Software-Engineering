function arrayModifier(arr) {

    let wArray = arr.shift().split(" ").map(Number)

    for (let i = 0; i < arr.length; i++) {

        let [command, firstEl, secondEl] = arr[i].split(" ")

        switch (command) {
            case "swap":
                let temp = wArray[Number(firstEl)]
                wArray[Number(firstEl)] = wArray[Number(secondEl)]
                wArray[Number(secondEl)] = temp
                    ; break
            case "multiply":
                wArray[Number(firstEl)] = wArray[Number(firstEl)] * wArray[Number(secondEl)]
                    ; break
            case "decrease":
                wArray = wArray.map(e => e - 1)
                    ; break
        }
        if (command === "end") {
            break
        }
    }
    console.log(wArray.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
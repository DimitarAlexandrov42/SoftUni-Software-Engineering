function processOddPosition(arr) {

    let result = []
    let position = 1

    for (let i = 0; i < arr.length; i++) {
        if (position % 2 === 0) {
            result.push(Number(arr[i]) * 2)
        }
        position++
    }

    console.log(result.reverse());


}
processOddPosition([10, 15, 20, 25])
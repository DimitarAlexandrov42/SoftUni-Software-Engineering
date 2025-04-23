function bombNumbers(arr, spec) {

    let bomb = spec[0]
    let bombPower = spec[1]
    let totalSum = 0

    for (let i = arr.length - 1 ; i > 0; i--) {

        let currNum = arr[i]

        if (currNum === bomb) {
            arr.splice(i - bombPower, 2 * bombPower +1)
        }

    }
    for(let l = 0 ; l < arr.length ; l++){
        totalSum += Number(arr[l])

    }
    console.log(totalSum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 2])
    


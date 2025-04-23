function negativePositiveNumbers(arr) {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]

        if (temp >= 0) {
            result.push(temp)
        } else {
            result.unshift(temp)
        }
    }
    console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9])
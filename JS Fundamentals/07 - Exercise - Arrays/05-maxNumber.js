function maxNumber(arr) {

    let result = ""

    for (let i = 1; i <= arr.length; i++) {

        let isMax = true

        let currentNum = Number(arr[i - 1])

        for (let j = i; j < arr.length; j++) {
            let nextNum = arr[j]

            if (currentNum <= nextNum) {
                isMax = false
                break
            }
        } if (isMax) {
            result += currentNum + " "
        }
    }
    console.log(result);
}
maxNumber([41, 41, 34, 20])
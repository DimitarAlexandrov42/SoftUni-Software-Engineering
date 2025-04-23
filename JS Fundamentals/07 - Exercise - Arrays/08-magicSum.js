function magicSum(arr, num) {

    let magicNum = Number(num)

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let currNum = Number(arr[i - 1])
            for (let j = i; j < arr.length; j++) {
                let nextNum = Number(arr[j])

                if (currNum + nextNum === magicNum) {
                    console.log(`${currNum} ${nextNum}`)
                }
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)
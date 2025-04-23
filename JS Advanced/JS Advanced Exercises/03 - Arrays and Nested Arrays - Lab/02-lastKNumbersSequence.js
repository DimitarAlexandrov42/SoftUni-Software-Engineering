function lastKNumbersSequance(length, k) {

    let num = [1]


    while (num.length < length) {

        let kArr = num.slice(- k)
        let sum = 0
        for (let i = 0; i < kArr.length; i++) {
            sum += kArr[i]
        }
        num.push(sum)

    }
     return num;

}
console.log(lastKNumbersSequance(8,2))
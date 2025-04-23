function lastKNumbersSequence(n, k) {

    let result = [1]


    while (n > result.length) {
        let kArr = result.slice(- k)
        console.log(kArr);
        let sum = 0
        for (let i = 0; i < kArr.length; i++) {
            sum += kArr[i]
        }
        result.push(sum)
    }
 
    console.log(result);




}
lastKNumbersSequence(6, 3)
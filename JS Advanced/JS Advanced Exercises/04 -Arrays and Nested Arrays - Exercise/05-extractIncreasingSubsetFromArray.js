function extractIncreasingSubsetFromArray(arr) {

    let result = []
    let biggest = 0
    for (const num of arr) {
       if(num > biggest || num === biggest){
        biggest = num
        result.push(biggest)
       }
    }
 return result
}
extractIncreasingSubsetFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)
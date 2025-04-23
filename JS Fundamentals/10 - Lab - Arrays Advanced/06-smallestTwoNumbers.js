function smallestTwoNumbers(arr){

    let sortedArr = arr.sort((a,b) => a-b)
    let result = sortedArr.slice(0,2)

    console.log(result.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5] )
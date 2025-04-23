function smallestTwoNumber(arr) {
console.log(arr.indexOf(44));
    let sorted = arr.sort((a, b) => a - b)

    let first = arr.shift()
    let second = arr.shift()
    console.log(first);
    console.log(second);



    
}
smallestTwoNumber([30, 15,100, 50, 5])
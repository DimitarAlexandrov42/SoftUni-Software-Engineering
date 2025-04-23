function biggestElement(arr) {
    
    let max = Number.MIN_SAFE_INTEGER
    for (const [...iterator] of arr) {
        for (const serched of iterator) {
            if (serched > max) {
                max = serched
            }
        }
    }
    console.log(max);


}
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])
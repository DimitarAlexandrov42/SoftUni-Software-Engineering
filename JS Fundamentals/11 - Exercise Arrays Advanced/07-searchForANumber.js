function searchForANumber(arr, arr2) {

    let elToTake = arr2[0]
    let elToDelete = arr2[1]
    let searchedNumber = arr2[2]

    let count = 0
    let newArr = arr.slice(0, elToTake)
    newArr.splice(0, elToDelete)

    for (el of newArr) {
        el = Number(el)
        if (el === searchedNumber) {
            count++
        }

    }
    console.log(`Number ${searchedNumber} occurs ${count} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
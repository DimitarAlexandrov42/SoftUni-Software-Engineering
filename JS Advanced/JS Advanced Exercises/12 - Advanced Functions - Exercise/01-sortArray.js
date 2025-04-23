function sortArray(arr, sortType) {

    if (sortType === "asc") {
        arr.sort((a, b) => a - b)
    } else if (sortType === "desc") {
        arr.sort((a, b) => b - a)
    }
    return arr
}
sortArray([14, 7, 17, 6, 8], 'asc')

// ---------------------------------------------------------------------------------------------
function sortArray(arr, sortType) {
    return sortType === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)
}


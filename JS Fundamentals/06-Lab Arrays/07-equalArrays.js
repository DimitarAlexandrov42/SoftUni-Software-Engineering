function equalArrays(arr, arr2) {

    let isEqual = true
    let totalSum = 0
    let indexCounter = 0

    for (let i = 0; i < arr.length; i++) {
        indexCounter = i
        totalSum += Number(arr[i])
        if (arr[i] === arr2[i]) {
            isEqual

        } else if (arr[i] !== arr2[i]) {
            isEqual = false
            break
        }
    } if (isEqual) {
        console.log(`Arrays are identical. Sum: ${totalSum}`);
    } else{
        console.log(`Arrays are not identical. Found difference at ${indexCounter} index`);
    }
}
equalArrays(['10', '20', '30'], ['11', '20', '30'])
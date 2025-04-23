function aggregateElements(arr) {

    let arr1 = arr

    let sum = 0
    let inverse = 0
    let concat = ''

    for (let i = 0; i < arr1.length; i++) {

        sum += arr1[i]

    }
    for (let i = 0; i < arr1.length; i++) {

        inverse += 1 / Number(arr1[i])

    }
    for (let i = 0; i < arr1.length; i++) {

        concat = concat.concat(arr[i])

    }
    console.log(sum);
    console.log(inverse);
    console.log(concat);

}
aggregateElements([2, 4, 8, 16])
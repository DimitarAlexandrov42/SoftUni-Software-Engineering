function arrayRotation(arr, num) {

    for (let i = 0; i < num; i++) {
        let firstElement = arr.shift()
        arr.push(firstElement)

    }

    console.log(arr.join(" "));

}
arrayRotation([51, 47, 32, 61, 21], 2)
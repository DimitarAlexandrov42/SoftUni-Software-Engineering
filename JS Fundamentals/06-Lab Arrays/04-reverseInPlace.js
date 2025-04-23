function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let buffer = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = buffer

    }
    console.log(arr.join(" "));
}

reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])

console.log("------------------------------------");

reverseInPlace(['33', '123', '0', 'dd'])
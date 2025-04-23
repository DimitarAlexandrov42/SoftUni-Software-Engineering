function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {

        let numAsString = String(arr[i])
        let reversedNumAsString = numAsString.split("").reverse().join("")

        if (Number(numAsString) === Number(reversedNumAsString)) {
            console.log(`true`);
        } else {
            console.log("false");
        }
    }
}
palindromeIntegers([123, 323, 421, 121])
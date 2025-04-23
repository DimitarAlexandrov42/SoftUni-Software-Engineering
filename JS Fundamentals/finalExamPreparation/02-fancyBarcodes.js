function fancyBarcodes(arr) {

    let pattern = /(@#+)(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/g

    let digitPattern = /[0-9]/g

    let barcodesCount = arr.shift()

    for (let i = 0; i < barcodesCount; i++) {
        let barcode = arr[i]
        let match = barcode.match(pattern)

        if (match === null) {
            console.log(`Invalid barcode`);
        } else {
            match = barcode.match(digitPattern)

            if (match === null) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${match.join('')}`);

            }
        }
    }
}
fancyBarcodes((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
)
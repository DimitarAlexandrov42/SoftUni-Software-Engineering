function distinctArray(arr) {

    let result = []

    for (const el of arr) {
        if (!result.includes(el)) {
            result.push(el)

        }

    }
    console.log(result.join(" "));
}
distinctArray([7, 7, 7, 2, 3, 4, 5, 7, 8])
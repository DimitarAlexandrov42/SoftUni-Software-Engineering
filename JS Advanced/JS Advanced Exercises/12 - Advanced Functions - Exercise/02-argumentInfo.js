function argumentInfo(...params) {
    let result = {}

    for (const el of params) {
        let type = typeof (el)
        console.log(`${type}: ${el}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 1
        } else {
            result[type] += 1
        }
    }
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1])

    for (const [key, value] of sorted) {
        console.log(`${key} = ${value}`);
    }

}
argumentInfo({ name: 'bob' }, 3.333, 9.999)
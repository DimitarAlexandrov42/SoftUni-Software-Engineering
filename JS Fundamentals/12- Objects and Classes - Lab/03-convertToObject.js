function convertToObject(jsonStr) {

    let obj = JSON.parse(jsonStr)

    for (const key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
function integerAndFloat(a, b, c) {

    let sum = a + b + c

    let isInteger = sum % 1 === 0 ? "Integer" : "Float"

    console.log(`${sum} - ${isInteger}`);


}
integerAndFloat(9, 100, 1.1)
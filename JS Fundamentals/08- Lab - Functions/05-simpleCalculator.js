function simpleCalculator(num1, num2, operation) {
    let result = 0
    switch (operation) {
        case "multiply":
            console.log(`${num1 * num2}`);
            ; break
        case "divide":
            console.log(`${num1 / num2}`);
            ; break
        case "add":
            console.log(`${num1 + num2}`);
            ; break
        case "subtract":
            console.log(`${num1 - num2}`);
            ; break
    }
}
function mathPower(number, raised) {

    let result = 1

    for (let i = 0; i < raised; i++) {

        result *= number

    }

    console.log(result);
}
mathPower(2, 8)
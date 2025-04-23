function greatestCommonDivisor(num1, num2) {

    num1 = Number(num1)
    num2 = Number(num2)

    let max = 0

    let num = Math.min(num1, num2)
    let buff = []
    for (let i = num; i > 0; i--) {
        i = Number(i)
        if (num1 % i === 0 && num2 % i === 0) {
            buff.push(i)

        }

    }
    for (let l = 0; l < buff.length; buff++) {
        if (buff[l] > max) {
            max = buff[l]
        } else {
            max = buff[l]
        }

    }
console.log(max);
}
greatestCommonDivisor(2154, 458)
function amazingNumber(num) {

    num = num.toString()
    let numSum = 0

    for (let i = 0; i < num.length; i++) {

        numSum += Number(num[i])

    }
    let result = numSum.toString().includes('9')

    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`)


}
amazingNumber(1233)
function reverseAnArrayOfNumber(n, inputArr) {

    let buff = ""

    for (let i = n; i > 0; i--) {
        buff += inputArr[i-1] + " "
      
    }
    console.log(buff)
}
reverseAnArrayOfNumber(3, [10, 20, 30, 40, 50])
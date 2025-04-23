function magiccMatrices(matrix) {

    let result = false

    let sum = Number(0)
    let checker = Number(0)
    let hasChecker = false
    let rows = false
    for (let i = 0; i < matrix.length; i++) {
        for (let l = 0; l < matrix[i].length; l++) {
              
            sum += matrix[i][l]
           
        }
        if (hasChecker === false) {
            checker += sum
            hasChecker = true
        }
        if (sum === checker) {
            rows = true
        } else {
            rows = false
            if (rows === false) {
                break
            }
        }
        sum = 0
    }
    let sum1 = Number(0)
    let checker1 = Number(0)
    let hasChecker1 = false
    let cols = false

    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
           
            sum1 += matrix[y][x]
           
        }
        if (hasChecker1 === false) {
            checker1 += sum1
            hasChecker1 = true
        }
        if (sum1 === checker1) {
            cols = true
        } else {
            cols = false
            if (cols === false) {
                break
            }
        }
        sum1 = 0

    }
    if (cols === true && rows === true) {
        result = true
    } else {
        result = false
    }
console.log(result)
}


magiccMatrices([[10, "s",10, "10"], [10, 10, 10, 10], [10, 10, 10, 10], [10, 10, 10, 10]])



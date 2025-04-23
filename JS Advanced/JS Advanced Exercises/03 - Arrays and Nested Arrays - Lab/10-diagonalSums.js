function diagonalSums(arr) {

    let [...matrix] = arr
    let fDiag = 0
    let sDiag = 0
    let orient = 0
    let orient2 = matrix.length - 1


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (j === orient) {
                fDiag += matrix[i][j]

            }
        }
        orient++
    }

    for (let l = 0; l < matrix.length; l++) {
        for (let q = 0; q < matrix.length; q++) {
            if (q === orient2) {
                sDiag += matrix[l][q]

            }
        }
        orient2--
    }

    console.log(`${fDiag} ${sDiag}`);
}
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])
function equalNeighbour(matrix) {

    let counter = 0
    let currNum = 0

    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] === matrix[x][y + 1]) {
                counter++
            }
        }
    }
    for (let i = 0; i < matrix[0].length; i++) {
        for (let l = 0; l < matrix.length; l++) {

            if (currNum === matrix[l][i]) {
                counter++
            }
            currNum = matrix[l][i]
        }
        currNum = 0
    }
    console.log(counter);
}
equalNeighbour
    ([['test', 'yes', 'yo', 'ho'],
    ['ho', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']])

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

equalNeighbour
    ([['2', '3', '4', '7', '0'],

    ['4', '0', '5', '3', '4'],

    ['2', '3', '5', '4', '2'],

    ['9', '8', '7', '5', '4']])
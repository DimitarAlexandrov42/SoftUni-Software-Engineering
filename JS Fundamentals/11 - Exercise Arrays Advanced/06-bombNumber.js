function bombNumbers(sequence, specific) {

    let bomb = specific[0]
    let bombPower = specific[1]

    let arrayLength = sequence.length
    let workingArr = sequence.slice()

    let currIndex = []
    let magicNum = 0
    let totalSum = 0



    for (let i = 0; i < arrayLength; i++) {

        let currNum = workingArr[i]

        if (currNum === bomb) {
            currIndex.push(i)
        }
    }

    let currIndexLength = currIndex.length

    for (let j = currIndexLength -1 ; j >= 0 ; j--) {
        magicNum = currIndex[j]


        workingArr.splice(magicNum - bombPower, 2*bombPower+1)




    } for (let s = 0; s < workingArr.length; s++) {
        totalSum += workingArr[s]

    }
    console.log(totalSum);

}
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
function equalSumsEvenOddPositions(input) {

    let startNum = Number(input[0])
    let endNum = Number(input[1])

    let buff = ""

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let evenPositionSum = 0
        let oddPositionSum = 0

        let curNumAsString = String(curNum)

        for (let i = 0; i < curNumAsString.length; i++) {

            let curDigit = Number(curNumAsString[i])
            let position = i + 1

            if (position % 2 === 0) {
                evenPositionSum += curDigit
            } else {
                oddPositionSum += curDigit
            }
        }
        if (oddPositionSum === evenPositionSum) {
           buff += curNumAsString + " "
            

        }
       
    }
    console.log(buff)
}
equalSumsEvenOddPositions(["100000", "100050"])
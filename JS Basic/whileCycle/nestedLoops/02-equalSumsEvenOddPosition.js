function equalSumsEvenOddPosition(input) {

    let startNum = Number(input[0])
    let endNum = Number(input[1])

    let buff = ""

    for (let curNum = startNum; curNum <= endNum; curNum++) {

        let evenPositionSum = 0
        let oddPositionSum = 0

        let curNumAsStr = String(curNum)

        for (let i = 0; i < curNumAsStr.length; i++) {

            let curDigit = Number(curNumAsStr[i])
            
            let position = i + 1
            
            if (position % 2 === 0) {
                oddPositionSum += curDigit
            } else {
                evenPositionSum += curDigit
            }
           

        }
        if (evenPositionSum === oddPositionSum) {
            buff += curNumAsStr + " "
        }
       

    }
    console.log(buff);
}
equalSumsEvenOddPosition(["299900", "300000"])
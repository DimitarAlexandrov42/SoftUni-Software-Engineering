function numberPyramid(input) {

    let curNum = Number(input[0])
    let current = 1
    let isBigger = false
    let printCurrentLine = ""

    for (let rows = 1; rows <= curNum; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > curNum) {
                isBigger = true
                break
            }
            printCurrentLine += current + " "
            current++
        }
        console.log(printCurrentLine)
        printCurrentLine = ""
        if (isBigger) {
            break
        }
    }
    
}
numberPyramid(["7"])
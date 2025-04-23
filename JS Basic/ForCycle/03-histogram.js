function histogram(input) {
    let num = Number(input[0])

    let range1Count = 0
    let range2Count = 0
    let range3Count = 0
    let range4Count = 0
    let range5Count = 0

    for (let i = 1; i <= num; i++) {
        let curNumber = Number(input[i])
        
        if (curNumber < 200) {
            range1Count++  
        } else if (curNumber <= 399) {
            range2Count++
        } else if (curNumber <= 599) {
            range3Count++
        } else if (curNumber <= 799) {
            range4Count++
        } else {
            range5Count++
        }
    }
    let range1Percent = (range1Count / num) * 100
    let range2Percent = (range2Count / num) * 100
    let range3Percent = (range3Count / num) * 100
    let range4Percent = (range4Count / num) * 100
    let range5Percent = (range5Count / num) * 100
    console.log(`${range1Percent.toFixed(2)}%`)
    console.log(`${range2Percent.toFixed(2)}%`)
    console.log(`${range3Percent.toFixed(2)}%`)
    console.log(`${range4Percent.toFixed(2)}%`)
    console.log(`${range5Percent.toFixed(2)}%`)
}
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])
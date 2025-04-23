function happyCatParking(input) {

    let dayCount = Number(input[0])
    let hoursPerDay = Number(input[1])

    let totalSum = 0
    let dayCounter = 0
    let totalSumR = 0
    let dayMoney = 0

    for (let a = 1; a <= dayCount; a++) {
        dayCounter++
        totalSum = 0
        dayMoney = 0

        for (let b = 1; b <= hoursPerDay; b++) {

            if (a % 2 === 0) {

                if (b % 2 === 0) {
                    totalSum += 1
                    totalSumR += 1
                } else {
                    totalSum += 2.50
                    totalSumR +=2.50
                }

            } else {
                if (b % 2 === 0) {
                    totalSum += 1.25
                    totalSumR += 1.25
                } else {
                    totalSum += 1
                    totalSumR += 1
                }
            }

        }
        dayMoney += totalSum
        console.log(`Day: ${dayCounter} - ${dayMoney.toFixed(2)} leva`)
    }
    
 console.log(`Total: ${totalSumR.toFixed(2)} leva`)

}
happyCatParking(["2", "5"])
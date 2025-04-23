function softUniReception(arr) {

    let firstEmploye = Number(arr.shift())
    let secondEmloye = Number(arr.shift())
    let thirdEmploye = Number(arr.shift())
    let studentsCount = Number(arr.shift())

    let workPerHour = firstEmploye + secondEmloye + thirdEmploye
    let hours = 0

    while (studentsCount > 0) {
        hours++
        studentsCount = studentsCount - workPerHour

        if (hours % 4 === 0) {
            hours++
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5', '6', '4', '20'])
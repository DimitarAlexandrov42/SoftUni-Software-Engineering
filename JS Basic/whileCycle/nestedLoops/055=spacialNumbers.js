function specialNumbers(input) {

    let n = Number(input[0])
    let specialNumbers = ""

    for (let i = 1111; i <= 9999; i++) {
        let currNum = i.toString()
        let specialNumbers1 = ""

        for (j = 0; j < currNum.length; j++) {

            let index = Number(currNum[j])
            let postion = j + 1
            if (n % index === 0) {
                specialNumbers1 += index

            } if (specialNumbers1.length === currNum.length) {
                specialNumbers += specialNumbers1 + " "
            }
        }
    }
console.log(specialNumbers)

}
specialNumbers(["3"])
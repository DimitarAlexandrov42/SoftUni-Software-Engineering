function barcodeGenerator(input) {
    let starNum = input[0];
    let endNum = input[1];
    let s1 = Number(starNum[0])
    let s2 = Number(starNum[1])
    let s3 = Number(starNum[2])
    let s4 = Number(starNum[3])
    let e1 = Number(endNum[0])
    let e2 = Number(endNum[1])
    let e3 = Number(endNum[2])
    let e4 = Number(endNum[3])
    // let buff=""
    let totalBuff = ""
    for (let i = s1; i <= e1; i++) {
        let buff = ""
        let buffI = ""
        if (i % 2 !== 0) {
            buffI += i

        } for (let j = s2; j <= e2; j++) {
            let buffJ = ""
            if (j % 2 !== 0) {
                buffJ += j

            } for (let c = s3; c <= e3; c++) {
                let buffC = ""
                if (c % 2 !== 0) {
                    buffC += c

                } for (let b = s4; b <= e4; b++) {
                    let buffB = ""
                    if (b % 2 !== 0) {
                        buffB += b
                    }
                    buff = (buffI + buffJ + buffC + buffB)
                    if (buff.length === 4) {
                        totalBuff += buff + " "
                    }
                }
            }

        }

    }
    console.log(totalBuff);
}
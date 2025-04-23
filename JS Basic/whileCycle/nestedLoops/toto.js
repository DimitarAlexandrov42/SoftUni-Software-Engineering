function toto(input) {
    let counter = 0

    for (let a = 1; a <= 49; a++) {

        for (let b = 1; b <= 49; b++) {
            for (let c = 1; c <= 49; c++) {
                for (let d = 1; d <= 49; d++) {
                    for (let e = 1; e <= 49; e++) {
                        for (let f = 1; f <= 49; f++) {
                            counter++
                        }
                    }

                }

            }
        }

    }
    console.log(counter)

} toto()
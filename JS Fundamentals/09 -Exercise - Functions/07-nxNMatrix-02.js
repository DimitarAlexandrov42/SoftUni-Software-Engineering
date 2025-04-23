function nXnMatrix(num) {

    let result = ``

    for (let i = 0; i < num; i++) {

        for (let l = 0; l < num; l++) {
            result += `${num} `
        }
        result += "\n"
    }
    console.log(result);
}
nXnMatrix(3)
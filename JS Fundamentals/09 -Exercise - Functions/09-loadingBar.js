function loadingBar(percent) {

    let symbols = percent / 10
    let points = 10 - symbols
    let from1to9 = 0
    if (1 <= symbols && symbols <= 9) {

        for (let i = 1; i <= symbols; i++) {
            if (i >= 1 && i <= 9) {
                from1to9 = `${percent}% [${"%".repeat(symbols)}${".".repeat(points)}]\nStill loading...`
            }
        }
        console.log(from1to9);
    }
    else {
        if (symbols === 0) {
            console.log(`${percent}% [..........]\nStill loading...`);
        } else {
            console.log(`100% Complete!\n[${"%".repeat(symbols)}]`);
        }
    }
}
loadingBar(90)
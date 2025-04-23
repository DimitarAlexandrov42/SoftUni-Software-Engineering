function heartDeliver(arr) {

    let wArray = arr.shift().split('@').map(Number)
    let command = arr.shift()
   
    let curIndex = 0

    while (command !== "Love!") {
        let result = command.split(" ")
        curIndex += Number(result[1])


        if (curIndex > wArray.length - 1) {
            curIndex = 0
        }

        if (wArray[curIndex] === 0) {
            console.log(`Place ${curIndex} already had Valentine's day.`);

        } else {
            wArray[curIndex] = wArray[curIndex] - 2
            if (wArray[curIndex] === 0) {
                console.log(`Place ${curIndex} has Valentine's day.`);

            }
        }

        command = arr.shift()
    }
    if (command === "Love!") {
        console.log(`Cupid's last position was ${curIndex}.`);
    }

    let result = []
    let isDone = true


    wArray.forEach(element => {
        if (element !== 0) {
            isDone = false
            result.push(element)
        }

    });

    if (isDone) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${result.length} places.`);
    }
}
heartDeliver(["4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"])
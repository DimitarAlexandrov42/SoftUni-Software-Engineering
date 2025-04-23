 
function examPrep(arr) {
 
    let firstLine = arr.shift().split('@');
    console.log(firstLine);
    let nextLine = arr.shift();
    let currentPostition = 0;
 
    while (nextLine !== 'Love!') {
        let result = nextLine.split(' ');
        currentPostition += Number(result[1]);
 
        if (currentPostition > firstLine.length - 1) {
            currentPostition = 0;
        }
 
        if (firstLine[currentPostition] === 0) {
            console.log(`Place ${currentPostition} already had Valentine's day.`);
        } else {
            firstLine[currentPostition] = firstLine[currentPostition] - 2;
            if (firstLine[currentPostition] === 0) {
                console.log(`Place ${currentPostition} has Valentine's day.`);
 
            }
        }
        nextLine = arr.shift();
 
    }
 
    console.log(`Cupid's last position was ${currentPostition}.`);
 
    let resultArr = [];
    let resultFlag = true;
 
    firstLine.forEach(element => {
        if (element !== 0) {
            resultFlag = false;
            resultArr.push(element);
        }
    });
 
    if (resultFlag) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${resultArr.length} places.`);
    }
 
}
examPrep (["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])

   
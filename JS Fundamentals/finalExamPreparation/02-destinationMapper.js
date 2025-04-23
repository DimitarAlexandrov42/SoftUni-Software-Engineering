function destinationMapper(text) {

    let pattern = /([=\/])[A-Z][A-Za-z]{2,}\1/g

    let result = []
    let destination = []
    let totalPoints = 0
    let match = text.match(pattern)

    if(match === null){
   console.log(`Destinations:`);
   console.log(`Travel Points: 0`);
    }else{

    while (match) {

        result.push(match)
        match = pattern.exec(text)
    }

    result[0].forEach(line => {
        let tempSub = line.substring(1, line.length - 1)
        destination.push(tempSub)
        totalPoints += tempSub.length
    });
    console.log(`Destinations: ${destination.join(', ')}`);
    console.log(`Travel Points: ${totalPoints}`);
    }
}
destinationMapper(`=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=`)
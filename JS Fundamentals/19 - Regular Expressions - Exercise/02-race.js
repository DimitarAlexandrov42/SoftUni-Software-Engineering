function race(arr) {

    let participants = arr.shift().split(', ')
    let objOfParticipants = {}
    let temDistance = 0

    for (const name of participants) {
        objOfParticipants[name] = 0
    }

    let digitPattern = /[0-9]/g
    let letterPatern = /[A-Za-z]/g

    let currentRow = arr.shift()

    while (currentRow !== 'end of race') {
        let currentName = currentRow.match(letterPatern).join('')
        let currentDistance = currentRow.match(digitPattern)
        currentDistance = currentDistance.map(Number)
        temDistance = currentDistance.reduce((a, b) => a + b)

        if (objOfParticipants.hasOwnProperty(currentName)) {
            objOfParticipants[currentName] += temDistance
        }

        temDistance = 0
        currentRow = arr.shift()

    }

let sort = Object.entries(objOfParticipants).sort((a,b)=> b[1] - a[1])

console.log(`1st place: ${sort[0][0]}`);
console.log(`2nd place: ${sort[1][0]}`);
console.log(`3rd place: ${sort[2][0]}`);

}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne','Mi*&^%$ch123o!#$%#nne787) ','%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])
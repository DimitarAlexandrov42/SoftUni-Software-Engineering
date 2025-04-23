function secondTask(arr) {

    let text = arr.shift()

    let array = []

    let pattern = /[@#](?<color>[a-z]{3,})[@#]\W*(?<count>\d+)/g

    let match = pattern.exec(text)

    while (match) {
        array.push(match)
        match = pattern.exec(text)
    }
for (const el of array) {
     console.log(`You found ${el.groups.count} ${el.groups.color} eggs!`);
}
}
secondTask(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
function meetings(arr) {

    let newObj = {}

    for (const line of arr) {
        let [day, name] = line.split(' ')
        if (newObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            newObj[day] = name
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const [key, value] of Object.entries(newObj)) {
        console.log(`${key} -> ${value}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)
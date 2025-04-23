function aMinerTask(arr) {

    let obj = {}

    for (let i = 0; i < arr.length; i += 2) {
        let metal = arr[i]
        let quantity = arr[i + 1]
        if (!obj.hasOwnProperty(metal)) {
            obj[metal] = Number(quantity)
        } else {
            obj[metal] += Number(quantity)
        }
    }
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value}`);
}
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
)
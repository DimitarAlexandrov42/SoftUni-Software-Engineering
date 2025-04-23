function cardGame(arr) {

    let obj = {}

    let enumCardPower = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }

    let enumCardType = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }
    let totalSum = 0
    let tempSum = 0

    for (const player of arr) {
        let [name, cards] = player.split(': ')
        let hand = cards.split(", ")

        if (!obj.hasOwnProperty(name)) {
            obj[name] = []
        }
        for (const iterator of hand) {
            if (!obj[name].includes(iterator)) {
                obj[name].push(iterator)
            }
        }
    }
    let entries = Object.entries(obj)

    for (const iterator of entries) {

        for (const line of iterator[1]) {
            let cardInfo = line.split('')
            let cardType = cardInfo.pop()
            cardInfo = cardInfo.join('')

            totalSum += enumCardPower[cardInfo] * enumCardType[cardType]
        }
        console.log(`${iterator[0]}: ${totalSum}`);
        totalSum = 0
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
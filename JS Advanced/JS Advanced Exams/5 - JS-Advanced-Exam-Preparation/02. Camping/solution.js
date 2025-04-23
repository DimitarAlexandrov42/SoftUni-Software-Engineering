class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []

    }
    registerParticipant(name, condition, money) {
        let isThere = this.listOfParticipants.find(x => x.name === name)
        let find = Object.keys(this.priceForTheCamp).includes(condition)

        if (!find) {
            throw new Error(`Unsuccessful registration at the camp.`)
        }
        if (isThere) {
            return `The ${name} is already registered at the camp.`
        }
        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`

        }
        else {
            this.listOfParticipants.push({
                name: name,
                condition: condition,
                power: 100,
                wins: 0
            })
            return `The ${name} was successfully registered.`
        }
    }
    unregisterParticipant(name) {
        let isThere = this.listOfParticipants.find(x => x.name === name)
        if (!isThere) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            let index = this.listOfParticipants.indexOf(isThere)

            this.listOfParticipants.splice(index, 1)

            return `The ${name} removed successfully.`
        }
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name === participant1)
        let player2 = this.listOfParticipants.find(x => x.name === participant2)

        if (typeOfGame === "Battleship") {
            if (!player1) {
                throw new Error(`Invalid entered name/s.`)
            }
            player1.power += 20
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }

        else if (typeOfGame === "WaterBalloonFights") {
            if (!player2) {
                throw new Error(`Invalid entered name/s.`)
            }
            else if (player1.condition !== player2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }
            else if (player1.power > player2.power) {
                player1.wins += 1
                return `The ${participant1} is winner in the game ${typeOfGame}.`

            } else if (player1.power < player2.power) {
                player2.wins += 1
                return `The ${participant2} is winner in the game ${typeOfGame}.`

            } else {
                return `There is no winner.`
            }
        }
    }
    toString() {

        let buff = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`
        let sortedArr = this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        for (const x of sortedArr) {
            buff += `${x.name} - ${x.condition} - ${x.power} - ${x.wins}\n`
        }

        return buff.trim()

    }
}
let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

console.log(camp.registerParticipant('Petar Petarson', 'child', 300))
console.log(camp.registerParticipant('Sara Dickinson', 'child', 200))
console.log(camp.registerParticipant('Ivan Kravata', 'child', 200))
console.log(camp.registerParticipant('Joro Debeliq', 'child', 200))
console.log(camp.registerParticipant('Kolio Magareto', 'child', 200))
console.log(camp.registerParticipant('Redjem Salim', 'child', 200))
console.log(camp.registerParticipant('Redjem Salim', 'child', 200))
console.log(camp.timeToPlay('Battleship', 'Sara Dickinson'))
console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson', 'Petar Petarson'))



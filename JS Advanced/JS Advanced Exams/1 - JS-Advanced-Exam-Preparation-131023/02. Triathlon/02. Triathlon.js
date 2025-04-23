class Triathlon {

    constructor(competitionName) {
        this.competitionName = competitionName,
            this.participants = {},
            this.listOfFinalist = []
        this.names = []
    }

    addParticipant(participantsName, participantGender) {
        if (this.participants.hasOwnProperty(participantsName)) {
            return `${participantsName} has already been added to the list`
        }
        else if (!this.participants.hasOwnProperty(participantsName)) {
            this.participants[participantsName] = participantGender
            return `A new participant has been added - ${participantsName}`
        }

    }

    completeness(participantsName, condition) {
        if (!this.participants.hasOwnProperty(participantsName)) {
            throw new Error(`${participantsName} is not in the current participants list`)
        }
        else if (condition / 30 >= 3) {

            this.listOfFinalist.push({
                name: participantsName,
                gender: this.participants[participantsName]
            })
            delete this.participants[participantsName]
            return `Congratulations, ${participantsName} finished the whole competition`


        }
        if (condition < 30) {
            throw new Error(`${participantsName} is not well prepared and cannot finish any discipline`);
        }
        if (condition / 30 >= 1 && condition / 30 <= 2.999) {
            return `${participantsName} could only complete ${Math.floor(condition / 30)} of the disciplines`
        }


    }

    rewarding(participantName) {


        for (const n of this.listOfFinalist) {

            if (!this.names.includes(n.name)) {
                this.names.push(n.name)
            }
        }

        if (this.names.includes(participantName)) {
            return `${participantName} was rewarded with a trophy for his performance`
        } else {
            return `${participantName} is not in the current finalists list`
        }
    }

    showRecord(criteria) {
        if (this.listOfFinalist.length === 0) {
            return `There are no finalists in this competition`
        } else if (criteria === "female") {

            let firstFemale = this.listOfFinalist.find(x => x.gender === "female")
            return `${firstFemale.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`

        } else if (criteria === "male") {

            let firstMale = this.listOfFinalist.find(x => x.gender === "male")
            return `${firstMale.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`
        } else if (criteria === "all") {
            let allFinalist = `List of all ${this.competitionName} finalists:\n`

            let sorted = this.names.sort((a, b) => a.localeCompare(b))
            for (const namez of sorted) {
                allFinalist += namez + "\n"
            }
            return allFinalist.trim()
        }

    }
}

const contest = new Triathlon("Dynamos");

console.log(contest.addParticipant("Peter", "male"));

console.log(contest.addParticipant("Sasha", "female"));

console.log(contest.addParticipant("Peter", "male"))
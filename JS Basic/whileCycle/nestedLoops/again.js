function cinemaTickets(input) {
    let studentTickets = 0
    let standartTickets = 0
    let kidTickets = 0

    index = 0
    
    let command = input[index]
    index++

    while (command !== "Finish") {
        let movieName = command

        let placesAvaiable = Number(input[index])
        index++

        let command1 = input[index]
        index++

        let placesTaken = 0

        while (command1 !== "End") {
            let ticketType = command1
            placesTaken++

            if (ticketType === "student") {
                studentTickets++
            } else if (ticketType === "standard") {
                standartTickets++
            } else if (ticketType === "kid") {
                kidTickets++
            }

            if (placesTaken === placesAvaiable) {
                break
            }

            command1 = input[index]
            index++

        }
        let percentTaken = (placesTaken / placesAvaiable) * 100
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full`);

        command = input[index]
        index++

    }


    let totalTickets = studentTickets + kidTickets + standartTickets
    console.log(`Total tickets: ${totalTickets}`)

    let studentTicketsPercent = (studentTickets / totalTickets) * 100
    let standartTicketsPercent = (standartTickets / totalTickets) * 100
    let kidTicketsPercent = (kidTickets / totalTickets) * 100

    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`)
    console.log(`${standartTicketsPercent.toFixed(2)}% standard tickets.`)
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`)

}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student",
    "student", "student", "student", "student", "student", "Finish"])
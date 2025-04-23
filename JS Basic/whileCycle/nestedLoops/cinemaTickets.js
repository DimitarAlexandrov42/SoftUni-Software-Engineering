function cinemaTickets(input) {
    index = 0
    let command = input[index]
    index++

    let percentMovie = 0
    let totalVisitors = 0
    let studentCounter = 0
    let standartCounter = 0
    let kidsCounter = 0
    let takenPlaces = 0

    while (command !== "Finish") {
        let movieName = command

        let freeSpaces = Number(input[index])
        index++

        let stopper = input[index]
        index++

        while (stopper !== "End") {
             takenPlaces++

            if (stopper === "Finish") {
                break
            }
            let movieType = stopper

            switch (movieType) {
                case "standard": standartCounter++; break
                case "kid": kidsCounter++; break
                case "student": studentCounter++; break
            }

            totalVisitors = (standartCounter + kidsCounter + studentCounter)
            
           

            stopper = input[index]
            index++
        }

        if (totalVisitors <= freeSpaces) {

            percentMovie = (totalVisitors / freeSpaces) * 100

            console.log(`${movieName} - ${percentMovie.toFixed(2)}% full.`)
            totalVisitors = 0

        }

        command = input[index]
        index++
        if (stopper === "Finish") {

            break
        }
    }
    let percentStudent = (studentCounter / totalVisitors) * 100
    let percentStandart = (standartCounter / totalVisitors) * 100
    let percentKids = (kidsCounter / totalVisitors) * 100

    console.log(`Total tickets: ${totalVisitors}`)
    console.log(`${percentStudent.toFixed(2)}% student tickets.`)
    console.log(`${percentStandart.toFixed(2)}% standard tickets.`)
    console.log(`${percentKids.toFixed(2)}% kids tickets.`)
}
cinemaTickets(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"])

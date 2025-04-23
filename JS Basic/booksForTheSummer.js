function booksForTheSummer(input){
    let totalPages = Number(input[0])
    let pagesPerHour = Number(input[1])
    let numberOfDays = Number(input[2])
    
    let timeAllotedForLiteraturePerDay = totalPages / pagesPerHour / numberOfDays

    console.log(timeAllotedForLiteraturePerDay)
}
booksForTheSummer(["432","15","4"])
function oldBooks(input) {
    let aniBook = input[0]
    let index = 1
    let nextBook = input[index]
    let bookIsFound = false

    while (nextBook !== 'No More Books') {
        index++
        nextBook = input[index]
        if (nextBook === aniBook) {
            bookIsFound = true
            break
        }

    }

    if (bookIsFound === true) {
        console.log(`You checked ${index - 1} books and found it.`)
    } else {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${index - 1} books.`)
    }

}
oldBooks(["Bourne",

    "True Story",

    "Forever",

    "More Space",

    "The Girl",

    "Spaceship",

    "Strongest",

    "Profit",

    "Tripple",

    "Stella",

    "The Matrix",

    "Bourne"])

   
   
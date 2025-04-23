function sortAnArrayBy2Criteria(arr) {


    let sorted = arr.sort((a, b) => {

        if (a.length !== b.length) {
            return (a.length - b.length)
        }
        return a.localeCompare(b)
    })

    return sorted.join(`\n`)

}
sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])
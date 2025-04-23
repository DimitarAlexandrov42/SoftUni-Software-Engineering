function add() {
    let ourCollection = document.createDocumentFragment()

    let parent = document.querySelector("body ul")
    const arr = [11, 99, 33, 44, 55, 66, 77, 88, 12]

    for (const iterator of arr) {
        let createCurrEL = document.createElement("li")
        createCurrEL.textContent = Number(iterator)
         
        ourCollection.appendChild(createCurrEL)
    }

    parent.appendChild(ourCollection)


}
function extractText() {
    let ourElements = document.getElementById('items').children
    let elementsAsArray = Array.from(ourElements).map(li => li.textContent).join(`\n`)

    let final = document.getElementById('result')
    final.value = elementsAsArray


}
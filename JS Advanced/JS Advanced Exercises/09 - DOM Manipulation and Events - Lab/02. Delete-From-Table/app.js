// -----------------------------------------------------------------------
//                1 -во решение!
// -----------------------------------------------------------------------

function deleteByEmail() {
    let list = document.querySelectorAll('tbody tr td:nth-child(2)')
    let input = document.querySelector("input")

    for (let td of list) {

        if (input.value === td.textContent) {
            let row = td.parentNode
            row.parentNode.removeChild(row)
            document.querySelector("#result").textContent = "Deleted."
            break
        }

    }

    document.querySelector("#result").textContent = "Not found."
}

// -----------------------------------------------------------------------
//                2 -ро решение!
// -----------------------------------------------------------------------

function deleteByEmail() {

    let value = document.querySelector(`input[name="email"]`)
    let rows = Array.from(document.querySelectorAll("tbody tr"))
    let found = false
    for (const row of rows) {
        if (row.children[1].textContent == value.value) {
            // let parrent = row.parentElement
            // parrent.removeChild(row)
            row.remove()
            found = true
        }
    } 
    // if (found) {
    //     document.querySelector(`div[id="result"]`).textContent = "Deleted."
    // } else {
    //     document.querySelector(`div[id="result"]`).textContent = "Not found."
    // }
    document.querySelector(`div[id="result"]`).textContent = found ? "Deleted." : "Not found."

        value.value = ""
}





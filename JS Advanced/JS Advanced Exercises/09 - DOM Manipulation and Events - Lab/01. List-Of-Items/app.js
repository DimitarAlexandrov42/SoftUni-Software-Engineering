function addItem() {
    // let ul = document.querySelector("ul")
    let input = document.getElementById("newItemText")
    let newEl = document.createElement("li")
    newEl.textContent = input.value

    document.querySelector("ul").appendChild(newEl)

      input.value = ""
}




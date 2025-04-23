function addItem() {
  // let ul = document.querySelector("ul")
  let input = document.getElementById("newItemText")
  let newEl = document.createElement("li")
  newEl.textContent = input.value

  let deleteBtn = document.createElement("a")
  deleteBtn.textContent = "[Delete]"
  deleteBtn.href = "#"

  let minusButton = document.createElement("a")
  minusButton.textContent = "[-]"
  minusButton.href = '#'

  let plusButton = document.createElement("a")
  plusButton.textContent = "[+]"
  plusButton.href = '#'

  let inputCounter = document.createElement('input')




  newEl.appendChild(minusButton)
  newEl.appendChild(inputCounter)
  newEl.appendChild(plusButton)

  minusButton.addEventListener('click', decrement)
  plusButton.addEventListener("click", increment)



  newEl.appendChild(deleteBtn)
  deleteBtn.addEventListener("click", onDelete)


  document.querySelector("ul").appendChild(newEl)

  input.value = ""
  function onDelete(event) {
    event.target.parentElement.remove()
    

  }
  function increment(ev) {
    const newValue = Number(ev.target.textContent) + 1
    ev.target.value = newValue

  }
  function decrement(ev) {
    const newValue = Number(inputCounter.textContent) - 1
    inputCounter.value = newValue
  }

}

// ======================= SECOND SOLUTION ===============================

const list = document.getElementById('items')
const input = document.getElementById('newItemText')

list.addEventListener('click', onDelete)

function addItem() {

  const list = document.getElementById('items')
  const input = document.getElementById('newItemText')

  list.addEventListener('click', onDelete)


  const liElement = document.createElement('li')
  liElement.textContent = input.value

  const deleteBtn = document.createElement('a')
  deleteBtn.textContent = '[Delete]'
  deleteBtn.href = "#"
  liElement.appendChild(deleteBtn)

  list.appendChild(liElement)

  input.value = ""
}

function onDelete(event) {
  if (event.target.tagName == 'A') {
    event.target.parentElement.remove()
  }

}
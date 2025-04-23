

function notify(message) {
  const field = document.getElementById('notification')
  field.style.display = 'block'
  field.textContent = message

  field.addEventListener('click', hide)

  function hide(ev) {
    field.style.display = "none"
  }

}
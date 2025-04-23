function focused() {
    [...document.querySelectorAll('input')]
        .forEach(l => {
            l.addEventListener('focus', onFocus)
            l.addEventListener('blur', onBlur)
        })

    function onFocus(ev) {
        ev.target.parentElement.classList.add('focused')
        //   ev.target.parentElement.style.background = "#123456"
        // ev.target.parentElement.className = 'focused'
    }
    function onBlur(ev) {
        ev.target.parentElement.classList.remove('focused')
      
        // ev.target.parentElement.className = ''
    }
} 
function validate() {
    const pattern = /(?<name>[a-z]+)@(?<domain>[a-z]+).(?<extension>[a-z]+)/g

    let field = document.getElementById('email')

    field.addEventListener('change', validation)

    function validation(ev) {

        if (pattern.test(ev.target.value)) {
            ev.target.removeAttribute('class')

        } else {
            ev.target.className = 'error'
        }
    }

}
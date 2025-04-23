function validate() {
    let usernameField = document.getElementById('username')
    let emailField = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmPassword = document.getElementById('confirm-password')

    let chechBox = document.getElementById('company')
    const buttonSubmit = document.getElementById('company')

    let companyInfoField = document.getElementById('companyInfo')

    const usernamePattern = /[A-Za-z0-9]{3,20}/
    const passwordPattern = /[\w]{5,15}/
    const emailPattern = /\w+@\w+.\w+/
    const companyNumberPattern = /^(1000|[1-9]\d{3})$/

    chechBox.addEventListener('change', moreInf)

    usernameField.addEventListener('change', username)

    function moreInf(ev) {
        if (chechBox.checked) {
            companyInfoField.style.display = 'block'
        } else {
            companyInfoField.style.display = 'none'
        }
    }

    function username(ev) {
        // if (usernamePattern.test(usernameField.value)) {
        //     ev.currentTarget.removeAttribute('class')
        // } else {
        // ev.target.className = 
    
        
    }



}

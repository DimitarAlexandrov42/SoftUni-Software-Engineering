function validate() {

    //dictionaries
    const html = {
        companyCheck: document.getElementById("company"),
        submit: document.getElementById("submit"),
        validDiv: document.getElementById("valid"),
        companyInfo: document.getElementById("companyInfo")
    }

    const inputFields = {
        username: document.getElementById("username"),
        email: document.getElementById("email"),
        password: document.getElementById("password"),
        "confirm-password": document.getElementById("confirm-password"),
        companyNumber: document.getElementById("companyNumber"),
    }

    //helper funcs

    const checkLength = (inputValue, lowerLen, greaterLen) =>
        inputValue.length >= lowerLen && inputValue.length <= greaterLen;

    const checkPassword = (inputValue, lowerLen, greaterLen, field) => {
        return (
            checkLength(inputValue, lowerLen, greaterLen) &&
            /^\w+$/g.test(inputValue) &&
            inputValue === inputFields[field].value
        )

    }

    const validate = {
        username: (inputValue) => checkLength(inputValue, 3, 20) && /^[a-zA-Z0-9]*$/g.test(inputValue),
        password: (inputValue) =>
            checkPassword(inputValue, 5, 15, "confirm-password"),

        "confirm-password": (inputValue) =>
            checkPassword(inputValue, 5, 15, "password"),
        email: (inputValue) => /^.*@.*\..*$/g.test(inputValue),
        companyNumber: (inputValue, isChecked) =>
            isChecked ? inputValue >= 1000 && inputValue <= 9999 : true,
    }

    const changeBorder = (isChecked, element) => {
        const style = isChecked ? "border: none" : "border-color: red"
        element.style = style
    }

    // attach event listeners
    html.companyCheck.addEventListener('change', onChange)
    html.submit.addEventListener('click', onClick)

    //callbacks

    function onChange(e) {
        const displayStyle = e.target.checked === true ? "block" : "none"
        html.companyInfo.style.display = displayStyle
    }
    function onClick(e) {
        e.preventDefault()
        const isChecked = html.companyCheck.checked
        let oneInvalid = false

        Object.entries(inputFields).forEach(([name, valueField]) => {
            const valid = validate[name](valueField.value, isChecked)
            changeBorder(valid, inputFields[name])

            if (!valid) {
                oneInvalid = true
            }
        })
        const displayStyled = oneInvalid ? "none" : "block"
        html.validDiv.style.display = displayStyled
    }
}
function attachEventsListeners() {

    const allButtons = document.querySelectorAll('[type="button"]')

    const allInputFields = document.querySelectorAll('[type="text"]')

    allButtons[0].addEventListener('click', forDays)
    allButtons[1].addEventListener('click', forHours)
    allButtons[2].addEventListener('click', forMinutes)
    allButtons[3].addEventListener('click', forSeconds)

    function forDays(ev) {
        let days = allInputFields[0].value
        allInputFields[1].value = Number(days) * 24
        allInputFields[2].value = Number(days) * 1440
        allInputFields[3].value = Number(days) * 86400

    }
    function forHours(ev) {
        let hours = allInputFields[1].value
        allInputFields[0].value = Number(hours) / 24
        allInputFields[2].value = Number(hours) * 60
        allInputFields[3].value = Number(hours) * 3600


    }
    function forMinutes(ev) {
        let minutes = allInputFields[2].value
        allInputFields[0].value = Number(minutes) / 1440
        allInputFields[1].value = Number(minutes) / 60
        allInputFields[3].value = Number(minutes) * 60

    }
    function forSeconds(ev) {
        let seconds = allInputFields[3].value
        allInputFields[0].value = Number(seconds) / 86400
        allInputFields[1].value = Number(seconds) / 3600
        allInputFields[2].value = Number(seconds) / 60
    }
}
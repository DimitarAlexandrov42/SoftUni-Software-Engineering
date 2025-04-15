const user = "userData"

export function getUserData() {
    let userData = localStorage.getItem(user)
    if (userData) { 
         return JSON.parse(userData)
    }
}

export function setUserData(data) {
    if (data) {
        localStorage.setItem(user, JSON.stringify(data))
    }
}

export function clearUserData() {
    localStorage.removeItem(user)
}

// export function createSubmitHandler(callback) {
//     return function (event) {
//         event.preventDefault()
//         const form = event.currentTarget
//         const formData = new FormData(form)
//         const data = Object.fromEntries(formData)

//         callback(data, form)
//     }

// }
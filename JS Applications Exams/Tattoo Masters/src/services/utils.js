const userData = "user"

export const getUserData = () => {
    let user = localStorage.getItem(userData)
    if (user) {
        return JSON.parse(user)
    }
}

export const deleteUserData = () => {
    localStorage.removeItem(userData)
}

export const setUserData = (data) => {
    if (data) {
        localStorage.setItem(userData, JSON.stringify(data))
    }
}
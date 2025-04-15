const userName = "user"

export const getUser = () => {
    let user = localStorage.getItem(userName)
    if (user) {
        return JSON.parse(user)
    }
}

export const deleteUser = () => {
    localStorage.removeItem(userName)
}

export const setUser = (user) => {
    localStorage.setItem(userName, JSON.stringify(user))
}
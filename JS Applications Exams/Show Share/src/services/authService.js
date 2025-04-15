
import { post, get } from "../api.js"
import { setUser, deleteUser, getUser } from "./utils.js"

export const login = async ({ email, password }) => {
    const host = "http://localhost:3030/users/login"
    let response = await post(host, { email, password })
    let result = await response.json()
    setUser(result)
    return result
}

export const register = async ({ email, password }) => {
    const host = "http://localhost:3030/users/register"
    let response = await post(host, { email, password })
    let result = await response.json()
    setUser(result)
    return result
}

export const logout = () => {
    const host = "http://localhost:3030/users/logout"
    get(host)
    deleteUser()
}
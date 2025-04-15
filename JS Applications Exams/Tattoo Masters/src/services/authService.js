import { post, get } from "./api.js"
import { deleteUserData, setUserData } from "./utils.js"


export const login = async ({ email, password }) => {
    const host = "http://localhost:3030/users/login"
    let response = await post(host, { email, password })
    let result = await response.json()
    setUserData(result)
    return result
}

export const register = async ({ email, password }) => {
    const host = "http://localhost:3030/users/register"
    let response = await post(host, { email, password })
    console.log(response.status);

    let result = await response.json()
    setUserData(result)
    return result
}

export const logout = async () => {
    const host = "http://localhost:3030/users/logout"
    await get(host)
}


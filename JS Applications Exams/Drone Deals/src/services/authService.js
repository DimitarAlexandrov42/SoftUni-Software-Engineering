import { setUserData, clearUserData } from '../utils.js'
import * as request from './api.js'





export const login = ({ email, password }) => {
    const baseURL = "http://localhost:3030/users/login"

    return request.post(baseURL, { email, password })
        .then(user => {
         
            setUserData(user)
            return user
        })



}

export const register = ({ email, password }) => {
    const baseURL = "http://localhost:3030/users/register"

    return request.post(baseURL, { email, password })
        .then(user => {
            setUserData(user)
            return user
        })

}


export const logout = () => {
    const baseURL = "http://localhost:3030/users/logout"

    request.get(baseURL)
    clearUserData()
}





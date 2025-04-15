import { getUserData } from "../utils.js"
import { clearUserData } from "../utils.js"
import { notificationView } from "../views/notificationView1.js"



const request = (method, url, data) => {
    let options = {
        method,
        headers: {}
    }
    const user = getUserData()

    if (user) {
        const token = user.accessToken
        options.headers['X-Authorization'] = token
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }




    return fetch(url, options)
        .then(res => {

            if (res.status === 204) {
                return null

            }
            if (!res.ok) {
                if (res.status === 403) {
                    clearUserData()
                }
                throw res.json()
            }
            return res.json()
        })






}

export const get = request.bind(null, "GET")
export const post = request.bind(null, "POST")
export const put = request.bind(null, "PUT")
export const patch = request.bind(null, "PATCH")
export const del = request.bind(null, "DELETE")
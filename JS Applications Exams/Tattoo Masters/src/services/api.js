import { getUserData } from "./utils.js"
import { deleteUserData } from "./utils.js"

export const request = async (method, url, data) => {

    let user = getUserData()


    let options = {
        method,
        headers: {}
    }

    if (user) {
        options.headers["X-authorization"] = user.accessToken
    }
    if (data != undefined) {
        options.headers["content-type"] = "application/json"
        options.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(url, options)
        if (response.status === 204) {
            return null
        }
        if (!response.ok) {
            if (response.status == 403) {
                deleteUserData()
            }
            throw response
        }
        return response
    } catch (err) {
        throw err

    }




}

export const get = request.bind(null, "GET")
export const post = request.bind(null, "POST")
export const put = request.bind(null, "PUT")
export const patch = request.bind(null, "PATCH")
export const del = request.bind(null, "DELETE")
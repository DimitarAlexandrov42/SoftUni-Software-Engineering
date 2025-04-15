import { getUser, deleteUser } from "./services/utils.js"


const request = async (method, url, data) => {
    
    const options = {
        method,
        headers: {}
    }
    
    const user = getUser()
    
    if (user) {
        options.headers["X-Authorization"] = user.accessToken
    }
    if (data != undefined) {
      
        options.headers["Content-Type"] = "application/json"
        options.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(url, options)
        if (response.status == 204) {
            return null
        }
        if (!response.ok) {
            if (response.status === 403) {
                deleteUser()
            }
            throw response
        }
        return response
    } catch (err) {
        return err.message
    }



}


export const get = request.bind(null, "GET")
export const post = request.bind(null, "POST")
export const put = request.bind(null, "PUT")
export const patch = request.bind(null, "PATCH")
export const del = request.bind(null, "DELETE")

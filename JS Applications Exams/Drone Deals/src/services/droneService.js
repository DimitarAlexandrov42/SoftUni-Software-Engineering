import { get, post, del, put } from "./api.js"

export const getAllDrones = () => {
    const host = 'http://localhost:3030/data/drones?sortBy=_createdOn%20desc'

    return get(host)
        .then(result => {

            return result
        })

}

export const getDroneById = (id) => {
    const host = `http://localhost:3030/data/drones/${id}`
    return get(host)
        .then(result => {
            return result
        })


}

export const uploadDrone = (data) => {
    const host = 'http://localhost:3030/data/drones'

    return post(host, data)
        .then(result => {
            return result
        })
}

export const removeDrone = (id) => {
    const host = `http://localhost:3030/data/drones/${id}`

    return del(host)
        .then(result => {
            return result
        })
}

export const editDrone = (id, data) => {
    const host = `http://localhost:3030/data/drones/${id}`

    return put(host, data)
        .then(result => {
            return result
        })
}
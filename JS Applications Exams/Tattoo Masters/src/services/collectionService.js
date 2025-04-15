import page from "../../node_modules/page/page.mjs"
import { post, get, put, del } from "./api.js"

export const uploadTatto = async (data) => {
    const host = "http://localhost:3030/data/tattoos"
    const response = await post(host, data)
    const result = await response.json()

    return result
}

export const loadAllTattos = async () => {
    const host = "http://localhost:3030/data/tattoos?sortBy=_createdOn%20desc"
    const response = await get(host)
    const result = await response.json()
    return result
}

export const loadOnlyOneTatto = async (id) => {
    const host = `http://localhost:3030/data/tattoos/${id}`
    const response = await get(host)
    const result = await response.json()
    return result
}

export const updateTatto = async (id, data) => {
    const host = `http://localhost:3030/data/tattoos/${id}`
    const response = await put(host, data)
    const result = await response.json()
    return result

}

export const delTatto = async (id) => {
    const host = `http://localhost:3030/data/tattoos/${id}`
    await del(host)


}

export const likes = async (tattooId) => {
    const host = `http://localhost:3030/data/likes`
    await post(host, { tattooId })

}

export const loadAllLikes = async (tattooId) => {
    const host = `http://localhost:3030/data/likes?where=tattooId%3D%22${tattooId}%22&distinct=_ownerId&count`
    const response = await get(host)
    const result = await response.json()


    return result
}

export const isLiked = async (tattooId, userId) => {
    const host = `http://localhost:3030/data/likes?where=tattooId%3D%22${tattooId}%22%20and%20_ownerId%3D%22${userId}%22&count`
    const response = await get(host)
    const result = await response.json()
    return result
}
import { get, post, put, del } from "../api.js"

export const loadAllMovies = async () => {
    const host = "http://localhost:3030/data/shows?sortBy=_createdOn%20desc"
    let response = await get(host)
    let result = await response.json()

    return result

}

export const uploadMovie = async (data) => {
    const host = "http://localhost:3030/data/shows"
    let response = await post(host, data)
    let result = await response.json()
    return result

}

export const loadMovieById = async (id) => {
    const host = `http://localhost:3030/data/shows/${id}`
    let response = await get(host)
    let result = await response.json()
    return result
}

export const deleteMovie = (id) => {
    const host = `http://localhost:3030/data/shows/${id}`
    del(host)
}

export const updateMovie = (id, data) => {
    const host = `http://localhost:3030/data/shows/${id}`
    put(host, data)
}

export const searchService = async (query) => {

    // let ss = encodeURIComponent(query)
    // console.log(ss);


    const host = `http://localhost:3030/data/shows?where=title%20LIKE%20%22${query}%22`
    let response = await get(host)
    let result = await response.json()

    return result
}
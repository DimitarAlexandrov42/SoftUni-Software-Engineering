import { loadMovieById, updateMovie } from "../services/movieService.js"
import { html } from "../../node_modules/lit-html/lit-html.js"

const editTemplate = (submitHandler, movie) => html`
  <section id="edit">
          <div class="form">
            <h2>Edit Show</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input
                type="text"
                name="title"
                id="title"
                value=${movie.title}
                placeholder="TV Show title"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                value=${movie.imageUrl}
                placeholder="Image URL"
              />
              <input
              type="text"
              name="genre"
              id="genre"
              value=${movie.genre}
              placeholder="Genre"
            />
            <input
            type="text"
            name="country"
            id="country"
            value=${movie.country}
            placeholder="Country"
          />
              <textarea
                id="details"
                name="details"
                placeholder="Details"
                rows="2"
                cols="10"
              >${movie.details} </textarea>
              <button type="submit">Edit Show</button>
            </form>
          </div>
        </section>
`


export const editView = async (ctx) => {
  let id = ctx.params.id
  let movie = await loadMovieById(id)

  const submitHandler = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const { title, ["image-url"]: imageUrl, genre, country, details } = Object.fromEntries(formData)


    if ([title, imageUrl, genre, country, details].some(el => el == "")) {
      return window.alert("All fields are required!")
    } else {
      updateMovie(id,{ title, imageUrl, genre, country, details })
      ctx.page.redirect(`/shows/${id}`)
    }
  }

  ctx.render(editTemplate(submitHandler, movie))
}
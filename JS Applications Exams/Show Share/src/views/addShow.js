import { html } from "../../node_modules/lit-html/lit-html.js"
import { uploadMovie } from "../services/movieService.js"

const addShowTemplate = (submitHandler) => html`
 <section id="create">
          <div class="form">
            <h2>Add Show</h2>
            <form  @submit=${submitHandler}class="create-form">
              <input
              type="text"
              name="title"
              id="title"
              placeholder="TV Show title"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
            />
            <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre"
          />
          <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
        />
            <textarea
              id="details"
              name="details"
              placeholder="Details"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Show</button>
            </form>
          </div>
        </section>
        <!-- Edit Page (Only for logged-in users) -->
      
`


export const addShowView = (ctx) => {
  const submitHandler = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const { title, ["image-url"]: imageUrl, genre, country, details } = Object.fromEntries(formData)

    if ([title, imageUrl, genre, country, details].some(el => el == "")) {
      return alert("All fields are required!")
    } else {
     await uploadMovie({ title, imageUrl, genre, country, details })

      ctx.page.redirect("/shows")
    }
  }
  ctx.render(addShowTemplate(submitHandler))
}
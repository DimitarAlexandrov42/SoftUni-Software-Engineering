import { html } from '../../node_modules/lit-html/lit-html.js'
import { loadOnlyOneTatto, updateTatto } from '../services/collectionService.js'

const editTemplate = (tatto, submitHandler) => html`
<section id="edit">
        <div class="form">
          <h2>Edit tattoo</h2>
          <form class="edit-form" @submit=${submitHandler}>
            <input type="text" name="type" id="type" value=${tatto.type} placeholder="Tattoo Type" />
            <input type="text" name="image-url" id="image-url" value=${tatto.imageUrl} placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${tatto.description} </textarea>
            <select id="user-type" name="user-type" >
              <option value="" disabled selected>Select your role</option>
              <option value="Tattoo Artist" ?selected=${tatto.userType === "Tattoo Artist"}>Tattoo Artist</option>
              <option value="Tattoo Enthusiast" ?selected=${tatto.userType === "Tattoo Enthusiast"}>Tattoo Enthusiast</option>
              <option value="First Time in Tattoo" ?selected=${tatto.userType === "First Time in Tattoo"}>
                First Time in Tattoo
              </option>
              <option value="Tattoo Collector" ?selected=${tatto.userType === "Tattoo Collector"}>Tattoo Collector</option>

            </select>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
`

export const editView = async (ctx) => {
    const id = ctx.params.id
    const currentTatto = await loadOnlyOneTatto(id)

    const submitHandler = async (e) => {
        e.preventDefault()


        const form = e.currentTarget
        const formData = new FormData(form)
        const {type, ["image-url"]: imageUrl, description, ["user-type"]: userType } = Object.fromEntries(formData)


        if ([type, imageUrl, description, userType].some(el => el == "")) {
            return alert("Fill every field first!")
        } else {
             updateTatto(id, { type, imageUrl, description, userType })
            ctx.page.redirect(`/details/${id}`)
        }
    }
    ctx.render(editTemplate(currentTatto, submitHandler))

}
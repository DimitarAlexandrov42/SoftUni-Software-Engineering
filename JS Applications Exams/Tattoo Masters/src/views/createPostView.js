import { html } from '../../node_modules/lit-html/lit-html.js'
import { uploadTatto } from '../services/collectionService.js'

const postTemplate = (submitHandler) => html` <section id="create">
        <div class="form">
            <h2>Add tattoo</h2>
            <form class="create-form" @submit=${submitHandler}>
                <input type="text" name="type" id="type" placeholder="Tattoo Type" />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
                <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
                <select id="user-type" name="user-type">
                <option value="" disabled selected>Select your role</option>
                <option value="Tattoo Artist">Tattoo Artist</option>
                <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                <option value="First Time in Tattoo">
                    First Time in Tattoo
                </option>
                <option value="Tattoo Collector">Tattoo Collector</option>
                </select>
                <button type="submit">Add tattoo</button>
            </form>
            </div>
        </section>
`


export const createPostView = (ctx) => {

    const submitHandler = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const { type, ["image-url"]: imageUrl, description, ["user-type"]: userType } = Object.fromEntries(formData)
        if ([type, imageUrl, description, userType].some(el => el == "")) {
            return alert("Fill every field first!")
        } else {
            let post = await uploadTatto({ type, imageUrl, description, userType })
            ctx.page.redirect("/collection")
        }

    }

    ctx.render(postTemplate(submitHandler))
}
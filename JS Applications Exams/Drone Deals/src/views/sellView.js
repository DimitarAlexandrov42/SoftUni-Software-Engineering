import { html } from "../../node_modules/lit-html/lit-html.js"
import { uploadDrone } from "../services/droneService.js"
import { notificationMsg } from "./notificationView.js"

const createTemplate = (submitHandler) => html`
 <!-- Create Page (Only for logged-in users) -->
 <section id="create">
    <div class="form form-item">
      <h2>Add Drone Offer</h2>
      <form class="create-form" @submit=${submitHandler}>
        <input type="text" name="model" id="model" placeholder="Drone Model" />
        <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
        <input type="number" name="price" id="price" placeholder="Price" />
        <input type="number" name="weight" id="weight" placeholder="Weight" />
        <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
        <input type="text" name="condition" id="condition" placeholder="Condition" />
        <textarea name="description" id="description" placeholder="Description"></textarea>
        <button type="submit">Add</button>
      </form>
`
export const sellView = (ctx) => {

    const submitHandler = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        let { model, imageUrl, price, weight, phone, condition, description } = Object.fromEntries(formData)

        if ([model, imageUrl, price, weight, phone, condition, description].some(el => el == "")) {

            notificationMsg('All fields are required!')
            
        } else {

            uploadDrone({
                model, imageUrl, price,
                weight, phone, condition, description
            })
            ctx.page.redirect('/marketplace')
        }
    }




    ctx.render(createTemplate(submitHandler))
}

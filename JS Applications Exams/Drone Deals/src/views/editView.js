import { html } from "../../node_modules/lit-html/lit-html.js"
import { editDrone, getDroneById } from "../services/droneService.js"
import { notificationMsg } from "./notificationView.js"

const editTemplate = (drone, submitHandler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form form-item">
      <h2>Edit Offer</h2>
      <form class="edit-form" @submit=${submitHandler}>
        <input type="text" name="model" id="model" placeholder="Drone Model" value=${drone.model} />
        <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" value=${drone.imageUrl} />
        <input type="number" name="price" id="price" placeholder="Price" value=${drone.price} />
        <input type="number" name="weight" id="weight" placeholder="Weight" value=${drone.weight} />
        <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" value=${drone.phone} />
        <input type="text" name="condition" id="condition" placeholder="Condition" value=${drone.condition} />
        <textarea name="description" id="description" placeholder="Description"> ${drone.description} </textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`


export const editView = (ctx) => {

  const id = ctx.params.id


  const submitHandler = (e) => {
    e.preventDefault()

    const upId = ctx.params.id

    const form = e.currentTarget
    const formData = new FormData(form)
    const { model, imageUrl, price, weight, phone, condition, description } = Object.fromEntries(formData)

    if ([model, imageUrl, price, weight, phone, condition, description].some(el => el === "")) {
      return notificationMsg("All fields is required!")
    } else {
      editDrone(upId, { model, imageUrl, price, weight, phone, condition, description })
        .then(result => {
          ctx.page.redirect(`/marketplace/${id}`)
        })
    }
  }

  getDroneById(id)
    .then(drone => {
      console.log(drone);


      ctx.render(editTemplate(drone, submitHandler))

    })


}
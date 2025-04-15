import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import { getDroneById, removeDrone } from "../services/droneService.js"
import { getUserData } from "../utils.js"



export const detailsTemplate = (drone, onDelete) => html`
<!-- Details page -->

<section id="details">
  <div id="details-wrapper">
    <div>
      <img id="details-img" src="${drone.imageUrl}" alt="example1" />
      <p id="details-model">${drone.model}</p>
    </div>
    <div id="info-wrapper">
      <div id="details-description">
        <p class="details-price">Price: €${drone.price} </p>
        <p class="details-condition">Condition: ${drone.condition} </p>
        <p class="details-weight">Weight: ${drone.weight}g </p>
        <p class="drone-description">${drone.description} </p>
        <p class="phone-number">Phone: ${drone.phone} </p>
      </div>

${drone.isOwner ?
    html` <div class="buttons">
          <a href="/marketplace/${drone._id}/edit" id="edit-btn">Edit</a>
          <a @click=${() => onDelete(drone._id)} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>`
    : nothing
  }

`



export const detailsView = (ctx) => {
  const id = ctx.params.id
  const userData = getUserData()


  const onDelete = (id) => {
    let option = confirm('Are you sure that you want to delete the record?')
    if (option) {
      return removeDrone(id)
        .then(result => {
          ctx.page.redirect("/marketplace")

        })
    }
  }




  getDroneById(id)
    .then(
      result => {
        if (userData) {
          if (userData._id === result._ownerId) {
            result.isOwner = true
          }
        }


        ctx.render(detailsTemplate(result, onDelete))

      }
    )

}
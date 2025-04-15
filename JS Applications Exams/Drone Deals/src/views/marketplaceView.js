import { html } from "../../node_modules/lit-html/lit-html.js"
import { getAllDrones } from "../services/droneService.js"
import { detailsTemplate } from "./detailsView.js"


const droneTemplate = (drone) => html` 
  <!-- Display a div with information about every post (if any)-->
  <div class="drone">
    <img src="${drone.imageUrl}" alt="example1" />
    <h3 class="model">${drone.model}</h3>
    <div class="drone-info">
      <p class="price">Price: €${drone.price}</p>
      <p class="condition">Condition: ${drone.condition}</p>
      <p class="weight">Weight: ${drone.weight}g</p>
    </div>
    <a class="details-btn" href="/marketplace/${drone._id}">Details</a>
  </div>

`

const marketplaceTemplate = (drones) => html`
  <h3 class="heading">Marketplace</h3>
        <section id="dashboard">

       ${drones.length >0
    ? drones.map(droneTemplate)
    : html`<h3 class="no-drones">No Drones Available</h3>`
  }
        </section>`

export const marketplaceView = (ctx) => {
  getAllDrones()
    .then(drones => {
      
      ctx.render(marketplaceTemplate(drones))

    })
}
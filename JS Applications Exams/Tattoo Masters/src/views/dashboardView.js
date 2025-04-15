import { html } from '../../node_modules/lit-html/lit-html.js'
import { loadAllTattos } from '../services/collectionService.js'

const dashboardTemplate = (tattos) => html`

      <!-- Dashboard page -->

      <h2>Collection</h2>
      ${tattos.length == 0
    ? html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`
    : html`<section id="tattoos">
        
          ${tattos.map(oneTattoTemplate)}

      
      </section>`

  }
     
      <!-- Display an h2 if there are no posts -->
      

`

const oneTattoTemplate = (tatto) => html`
        <div class="tattoo">
          <img src="${tatto.imageUrl}" alt="example1" />
          <div class="tattoo-info">
            <h3 class="type">${tatto.type} </h3>
            <span>Uploaded by </span>
            <p class="user-type">${tatto.userType} </p>
            <a class="details-btn" href="/details/${tatto._id}">Learn More</a>
          </div>
        </div>
`





export const dashboardView = async (ctx) => {
  const allTattos = await loadAllTattos()
  ctx.render(dashboardTemplate(allTattos))
}
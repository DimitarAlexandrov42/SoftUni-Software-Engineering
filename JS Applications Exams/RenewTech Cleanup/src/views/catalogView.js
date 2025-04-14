import { html } from "../../node_modules/lit-html/lit-html.js";
import { loadAllSolutions } from "../services/collectionService.js";

const collectionTemplate = (solutions)=>html`
 <!-- Dashboard page -->
 <h2>Solutions</h2>

        ${solutions.length !=0
        ? html`
        <section id="solutions">
                ${solutions.map(oneSolutionTemplate)}
              </section>
        `
        :html`<h2 id="no-solution">No Solutions Added.</h2>`

        }
`

const oneSolutionTemplate =(solution)=>html`
         <div class="solution">
            <img src="${solution.imageUrl}" alt="example1" />
            <div class="solution-info">
              <h3 class="type">${solution.type}</h3>
              <p class="description">
               ${solution.description}
              </p>
              <a class="details-btn" href="/details/${solution._id}">Learn More</a>
            </div>
          </div>
`

export const catalogView = async(ctx)=>{
  let allSolutions = await loadAllSolutions()
    ctx.render(collectionTemplate(allSolutions))
}
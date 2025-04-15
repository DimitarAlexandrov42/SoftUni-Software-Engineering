import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import { deleteMovie, loadMovieById } from "../services/movieService.js"
import { getUser } from "../services/utils.js"



const detailsTemplate = (movie, canEdit, delFunc) => html`
 <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${movie.imageUrl}" alt="example1" />
            <div id="details-text">
              <p id="details-title">${movie.title}</p>
              <div id="info-wrapper">
                <div id="description">
                  <p id="details-description">
                  ${movie.details}
                  </p>
                </div>
              </div>
          

              <!--Edit and Delete are only for creator-->
              ${canEdit
    ? html`
                 <div id="action-buttons">
                    <a href="edit/${movie._id}" id="edit-btn">Edit</a>
                    <a @click=${delFunc}  href="javascript:void(0)" id="delete-btn">Delete</a>
                 </div>`
    : nothing}
              
            </div>
          </div>
        </section>
`

export const detailsView = async (ctx) => {
  let id = ctx.params.id
  let movie = await loadMovieById(id)
  let user = getUser()
  let canEdit

  if (user) {
    if (user._id == movie._ownerId) {
      canEdit = true
    }
  }

  const delFunc = async () => {
    let choice = confirm('Are you sure that you want to delete the record?')
    
  if (choice){

    deleteMovie(id)
  ctx.page.redirect("/shows")

  }



  }




  ctx.render(detailsTemplate(movie, canEdit, delFunc))
}
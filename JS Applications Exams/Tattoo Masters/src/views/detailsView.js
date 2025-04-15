import { html } from '../../node_modules/lit-html/lit-html.js'
import { delTatto, loadOnlyOneTatto, likes, loadAllLikes, isLiked } from "../services/collectionService.js";
import { getUserData } from '../services/utils.js';
import page from "../../node_modules/page/page.mjs"


const detailsTemplate = (tattoo, user, canEdit, likesTattoo) => html`
<section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="${tattoo.imageUrl}" alt="example1" />
          <div>
            <div id="info-wrapper">
              <p id="details-type">${tattoo.type} </p>
              <div id="details-description">
                <p id="user-type">${tattoo.userType} </p>
                <p id="description">
                 ${tattoo.description}
                </p>
              </div>
              <h3>Like tattoo:<span id="like">${tattoo.AllLikes}</span></h3>
              <!--Edit and Delete are only for creator-->
              <div id="action-buttons">
                ${canEdit
    ? html`<a href="/edit/${tattoo._id}" id="edit-btn">Edit</a>
                           <a href="javascript:void(0)" @click=${() => delFunc(tattoo._id)} id="delete-btn">Delete</a>`
    : ""
  }
                


               ${user && user._id !== tattoo._ownerId
    ? tattoo.isLiked == 0
      ? html`<a href="javascript:void(0)" @click=${() => likesTattoo()} id="like-btn">Like</a>`
      : ""
    : ""



  }
                <!--Bonus - Only for logged-in users ( not authors )-->
                
              </div>
            </div>
          </div>
        </div>
      </section>`





export const detailsView = async (ctx) => {
  const id = ctx.params.id



  const user = getUserData()
  const tattoo = await loadOnlyOneTatto(id)

  let canEdit = false

  tattoo.AllLikes = await loadAllLikes(id)

  if (user) {
    tattoo.isLiked = await isLiked(id,user._id)
  }

  if (user) {
    if (user._id === tattoo._ownerId) {
      canEdit = true
    }
  }

  const likesTattoo = async () => {
    await likes(id)
    page.redirect(`/details/` + id)

  }




  ctx.render(detailsTemplate(tattoo, user, canEdit, likesTattoo))
}

const delFunc = (id) => {
  let choice = confirm("Are you sure that you want to delete this record?")
  if (choice) {
    delTatto(id)
    page.redirect("/collection")
  }
}

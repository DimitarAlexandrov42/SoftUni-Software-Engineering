import { html } from "../../node_modules/lit-html/lit-html.js";
import {
  deleteSolutions,
  loadOnlyOneSolution,
  totalLikes,
} from "../services/collectionService.js";
import { getUserData } from "../services/utils.js";
import { like,isLiked } from "../services/collectionService.js";

const detailsTemplate = (solution, user, onDelete, onLike) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${solution.imageUrl}" alt="example1" />
      <div>
        <p id="details-type">${solution.type}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">${solution.description}</p>
            <p id="more-info">${solution.learnMore}</p>
          </div>
        </div>
        <h3>Like Solution:<span id="like">${solution.allLikes}</span></h3>

        <!--Edit and Delete are only for creator-->
        ${user
          ? html`<div id="action-buttons">
              ${user._id == solution._ownerId
                ? html` <a href="/edit/${solution._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" @click=${() => onDelete()} id="delete-btn">Delete</a>`
                :""
                }
                
                ${solution.islikedz===0 && solution._ownerId != user._id
                ?html`<a href="javascript:void(0)" @click=${() => onLike()}id="like-btn">Like</a>`
                :""
                  }

              <!--Bonus - Only for logged-in users ( not authors )-->
            </div>`
          : html``}
      </div>
    </div>
  </section>
`;

export const detailsView = async (ctx) => {
  let id = ctx.params.id;
  let solution = await loadOnlyOneSolution(id);

  let user = getUserData();

  let allLikes = await totalLikes(solution._id);
  solution.allLikes = allLikes


  if(user){
    let islikedz = await isLiked(id,user._id)
    solution.islikedz = islikedz

  }




  const onLike = async () => {
  await like(id);
    
    ctx.page.redirect(`/details/${id}`);
  };

  const onDelete = async () => {
    let question = confirm("Are you sure that you want to delete this record?");
    if (question) {
      await deleteSolutions(id);
      ctx.page.redirect("/solutions");
    }
  };

  ctx.render(detailsTemplate(solution, user, onDelete, onLike));
};

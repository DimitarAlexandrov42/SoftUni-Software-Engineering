import { html } from "../../node_modules/lit-html/lit-html.js";
import { isLiked, loadOnlyOneGame, totalLikes,like, deleteGame } from "../services/gameService.js";
import { getUserData } from "../services/utils.js";

const detailsTemplate = (game,user,onDelete,onLike)=>html`
   <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="${game.imageUrl}" alt="example1" />
          <div>
            <div id="info-wrapper">
              <p id="game-details-name">${game.name}</p>
              <div id="details-description">
                <p id="details-release-date">Release Date: ${game.releaseDate}</p>
                <p id="description">
                  ${game.description}
                </p>
              </div>
              <h3>Game Likes:<span id="like">${game.allLikes}</span></h3>
              <!--Edit and Delete are only for creator-->

                    ${user
                      ?html`<div id="action-buttons">
                        ${user._id == game._ownerId
                        ?html`
                                    <a href="/edit/${game._id}" id="edit-btn">Edit</a>
                                    <a href="javascript:void(0)" @click=${()=>onDelete()} id="delete-btn">Delete</a>
                        `
                        :""
                        }

                        ${game.isLikedz === 0 && game._ownerId != user._id
                        ?html` <a href="javascript:void(0)" @click=${()=>onLike()} id="like-btn">Like</a>`
                        :""
                        }
                      </div>`
                      : ""
                      }

              
                

              
                
              
            </div>
          </div>
        </div>
      </section>
`



export const detailsView = async(ctx)=>{
    let id = ctx.params.id;
    let game = await loadOnlyOneGame(id);
  
    let user = getUserData();

    let allLikes = await totalLikes(game._id)
    game.allLikes = allLikes

    

    if(user){
       let isLikedz = await isLiked(id,user._id)
      game.isLikedz = isLikedz
    }

    const onLike = async ()=>{
      await like(id)
      ctx.page.redirect(`/details/${id}`)
    }

    const onDelete =async ()=>{
      let question = confirm('Are you sure that you want to delete this game?')

      if(question){
        await deleteGame(id)
        ctx.page.redirect('/games')
      }
    }
  
    ctx.render(detailsTemplate(game,user,onDelete,onLike))

}
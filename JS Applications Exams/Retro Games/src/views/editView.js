import { html } from "../../node_modules/lit-html/lit-html.js";
import { loadOnlyOneGame, updateGame } from "../services/gameService.js";

const editTemplate =(submitHandler,game)=>html`
   <section id="edit">
        <div class="form">
          <h2>Edit Retro Game</h2>
          <form class="edit-form" @submit=${submitHandler}>
            <input type="text" name="game-name" id="game-name" placeholder="Game Name" value=${game.name} />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" value=${game.imageUrl} />
            <input type="text" name="platform" id="platform" placeholder="Platform" value=${game.platform} />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${game.description}</textarea>
            <textarea  id="release-date"  name="release-date" placeholder="Release Date">${game.releaseDate}</textarea>
            <button type="submit">Edit Game</button>
          </form>
        </div>
      </section>
`
export const editView = async(ctx)=>{

    let id = ctx.params.id;
    let solution = await loadOnlyOneGame(id);
  
    const submitHandler = async (e) => {
      e.preventDefault()
      let form = e.currentTarget;
      let formData = new FormData(form);
      let { ['game-name']:name,["image-url"]:imageUrl,platform,description,["release-date"]:releaseDate  } =
        Object.fromEntries(formData);
  
      if ([name,imageUrl,platform,description,releaseDate].some((el) => el == "")) {
        return alert("All fields are required!");
      }else{
  
        await updateGame(id,{name,imageUrl,platform,description,releaseDate})
        ctx.page.redirect(`/details/${id}`)
        
      }
  
    };
  
    ctx.render(editTemplate(submitHandler, solution));

}
import { html } from "../../node_modules/lit-html/lit-html.js";
import {loadGame} from "../services/gameService.js"


const createTemplate =(submitHandler)=>html`
    <section id="create">
        <div class="form">
          <h2>Add Retro Game</h2>
          <form class="create-form" @submit=${submitHandler}>
            <input type="text" name="game-name" id="game-name" placeholder="Game Name" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <input type="text" name="platform" id="platform" placeholder="Platform" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea  id="release-date"  name="release-date" placeholder="Release Date"></textarea>
            <button type="submit">Add Game</button>
          </form>
        </div>
      </section>
`


export const createView = (ctx)=>{

    const submitHandler = async(e) => {
        e.preventDefault();
        let form = e.currentTarget;
        let formData = new FormData(form);
        let {['game-name']:name,["image-url"]:imageUrl,platform,description,["release-date"]:releaseDate } = Object.fromEntries(formData);
    
        if ([name,imageUrl,platform,description,releaseDate].some((el) => el == "")) {
          return alert("All fields are required!");
        }
    
        await loadGame({name,imageUrl,platform,description,releaseDate})
        ctx.page.redirect('/games')
      };
    
      ctx.render(createTemplate(submitHandler))

}
import { html } from "../../node_modules/lit-html/lit-html.js";
import { loadAllGames } from "../services/gameService.js";

const catalogTemplate = (games) => html`
  <h2>Games Collection</h2>

  ${games.length !=0
    ? html`
    <section id="retro-games">
        ${games.map(oneGameTemplate)}
  </section>
    `
    :html`
    <h2 id="no-game">No retro games yet, be the first to contribute</h2>
    `
  }
  

`;

const oneGameTemplate = (game) => html`
  <div class="game">
    <img src="${game.imageUrl}" alt="example2" />
    <div class="game-info">
      <h3 class="game-name">${game.name}</h3>
      <p class="platform">Platform: ${game.platform}</p>
      <a class="details-btn" href="/details/${game._id}">See More</a>
    </div>
  </div>
`;

export const catalogView = async (ctx) => {
  let allGames = await loadAllGames();
  ctx.render(catalogTemplate(allGames))
};

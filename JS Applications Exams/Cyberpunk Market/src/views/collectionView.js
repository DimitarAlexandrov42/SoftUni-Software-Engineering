import { html } from "../../node_modules/lit-html/lit-html.js";
import { loadAllItems } from "../services/marketService.js";

const collectionTemplate = (items) => html`
  <h3 class="heading">Market</h3>

  ${items.length != 0
    ? html`
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${items.map(oneItemCard)}
        </section>
      `
    : html`<h3 class="empty">No Items Yet</h3>`}

  <!-- Display an h2 if there are no posts -->
`;

let oneItemCard = (item) => html`
  <div class="item">
    <img src="${item.imageUrl}" alt="example1" />
    <h3 class="model">${item.item}</h3>
    <div class="item-info">
      <p class="price">Price: €${item.price}</p>
      <p class="availability">${item.availability}</p>
      <p class="type">Type: ${item.type}</p>
    </div>
    <a class="details-btn" href="/details/${item._id}">Uncover More</a>
  </div>
`;

export const collectionView = async (ctx) => {
   let items = await loadAllItems()
   

  ctx.render(collectionTemplate(items));
};

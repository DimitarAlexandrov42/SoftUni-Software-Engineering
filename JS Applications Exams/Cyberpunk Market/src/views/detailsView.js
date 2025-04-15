import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteRecord, loadOnlyOneItem } from "../services/marketService.js";
import { getUserData } from "../services/utils.js";

const detailsTemplate = (item, user, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <div>
        <img id="details-img" src="${item.imageUrl}" alt="example1" />
        <p id="details-title">${item.item}</p>
      </div>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="details-price">Price: €${item.price}</p>
          <p class="details-availability">${item.availability}</p>
          <p class="type">Type: ${item.type}</p>
          <p id="item-description">${item.description}</p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${user?._id == item._ownerId
          ? html`
              <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a
                  href="javascript:void(0)"
                  id="delete-btn"
                  @click=${() => onDelete()}
                  >Delete</a
                >
              </div>
            `
          : html``}
      </div>
    </div>
  </section>
`;

export const detailsView = async (ctx) => {
  let id = ctx.params.id;
  let item = await loadOnlyOneItem(id);
  let user = getUserData();

  const onDelete = async () => {
    let question = confirm("Are you sure that you want to delete this record!");

    if (question) {
      await deleteRecord(id);
      ctx.page.redirect("/collection");
    }
  };

  ctx.render(detailsTemplate(item, user, onDelete));
};

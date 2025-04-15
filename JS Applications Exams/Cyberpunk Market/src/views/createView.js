import { html } from "../../node_modules/lit-html/lit-html.js";
import { addItem } from "../services/marketService.js";
import { notificationMsg } from "./notificationMsg.js";

const createTemplate = (submitHandler) => html`
  <section id="create">
    <div class="form form-item">
      <h2>Share Your item</h2>
      <form class="create-form" @submit=${submitHandler}>
        <input type="text" name="item" id="item" placeholder="Item" />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
        />
        <input type="text" name="type" id="type" placeholder="Item Type" />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export const createView = (ctx) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let { item, imageUrl, price, availability, type, description } =
      Object.fromEntries(formData);

    if (
      [item, imageUrl, price, availability, type, description].some(
        (el) => el == ""
      )
    ) {
      return notificationMsg("Áll fields are required!");
    } else {
      await addItem({ item, imageUrl, price, availability, type, description });
      ctx.page.redirect("/collection");
    }
  };

  ctx.render(createTemplate(submitHandler));
};

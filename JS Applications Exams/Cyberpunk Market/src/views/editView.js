import { html } from "../../node_modules/lit-html/lit-html.js";
import { loadOnlyOneItem, updateItem } from "../services/marketService.js";
import { notificationMsg } from "./notificationMsg.js";

const editTemplate = (submitHandler, item) => html`
  <section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form class="edit-form" @submit=${submitHandler}>
        <input type="text" name="item" id="item" placeholder="Item" value=${item.item} />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
          value=${item.imageUrl}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
          value=${item.price}
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
          value=${item.availability}
        />
        <input type="text" name="type" id="type" placeholder="Item Type" value=${item.type} />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        >${item.description}</textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export const editView = async (ctx) => {
  let id = ctx.params.id;
  let item = await loadOnlyOneItem(id);

  const submitHandler = async(e) => {
    e.preventDefault()
    let form = e.currentTarget
    let formData = new FormData(form)
 let { item, imageUrl, price, availability, type, description} = Object.fromEntries(formData)

 if ([item, imageUrl, price, availability, type, description].some((el) => el == "")) {
  return  notificationMsg("Áll fields are required!") 
}else{
  await updateItem(id,{item, imageUrl, price, availability, type, description})
  ctx.page.redirect(`/details/${id}`)
}
  };

  ctx.render(editTemplate(submitHandler, item));
};

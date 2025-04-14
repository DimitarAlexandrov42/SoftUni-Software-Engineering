import { html } from "../../node_modules/lit-html/lit-html.js";
import { loadSolution } from "../services/collectionService.js";

const createTemplate = (submitHandler) => html`
  <section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Add Solution</h2>
      <form class="create-form" @submit=${submitHandler}>
        <input type="text" name="type" id="type" placeholder="Solution Type" />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
        ></textarea>
        <textarea
          id="more-info"
          name="more-info"
          placeholder="more Info"
          rows="2"
          cols="10"
        ></textarea>
        <button type="submit">Add Solution</button>
      </form>
    </div>
  </section>
`;

export const addSolution = (ctx) => {
  const submitHandler = async(e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let {
      type,
      ["image-url"]: imageUrl,
      description,
      ["more-info"]: learnMore,
    } = Object.fromEntries(formData);

    if ([type, imageUrl, description, learnMore].some((el) => el == "")) {
      return alert("All fields are required!");
    }

    await loadSolution({type,imageUrl,description,learnMore})
    ctx.page.redirect('/solutions')
  };

  ctx.render(createTemplate(submitHandler))
};

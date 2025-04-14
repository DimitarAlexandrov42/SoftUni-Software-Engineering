import { html } from "../../node_modules/lit-html/lit-html.js";
import { loadOnlyOneSolution, updateSolution } from "../services/collectionService.js";
import page from "../../node_modules/page/page.mjs";

const editTemplate = (submitHandler, solution) => html`
  <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Edit Solution</h2>
      <form class="edit-form" @submit=${submitHandler}>
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Solution Type"
          value=${solution.type}
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          value=${solution.imageUrl}
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
        >${solution.description}</textarea>
        <textarea
          id="more-info"
          name="more-info"
          placeholder="more Info"
          rows="2"
          cols="10"
        >${solution.learnMore}</textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export const editView = async (ctx) => {
  let id = ctx.params.id;
  let solution = await loadOnlyOneSolution(id);

  const submitHandler = async (e) => {
    e.preventDefault()
    let form = e.currentTarget;
    let formData = new FormData(form);
    let { type, ["image-url"]:imageUrl, description, ["more-info"]:learnMore } =
      Object.fromEntries(formData);

    if ([type, imageUrl, description, learnMore].some((el) => el == "")) {
      return alert("All fields are required!");
    }else{

      await updateSolution(id,{type,imageUrl,description,learnMore})
      ctx.page.redirect(`/details/${id}`)
      
    }

  };

  ctx.render(editTemplate(submitHandler, solution));
};

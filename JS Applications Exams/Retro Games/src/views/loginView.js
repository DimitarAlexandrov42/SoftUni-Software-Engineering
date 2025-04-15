import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../services/authService.js";

const loginTemplate = (submitHandler) => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${submitHandler}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
      </form>
    </div>
  </section>
`;

export const loginView = (ctx) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let { email, password } = Object.fromEntries(formData);

    if (email == "" || password == "") {
      return alert("All fields are required!");
    } else {
      try {
        const user = await login({ email, password });
        if (!user) {
          return alert("There is no such user!");
        }
      } catch (err) {
        return alert("No user with those data in the system!");
      }
      ctx.page.redirect("/");
    }
  };

  ctx.render(loginTemplate(submitHandler));
};

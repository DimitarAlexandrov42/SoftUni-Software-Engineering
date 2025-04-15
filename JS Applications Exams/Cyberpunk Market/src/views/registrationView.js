import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../services/authService.js";
import { notificationMsg } from "./notificationMsg.js";

const registrationTemplate = (submitHandler) => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit=${submitHandler}>
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="#">Login</a></p>
      </form>
    </div>
  </section>
`;

export const registerView = (ctx) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let {
      email,
      password,
      ["re-password"]: repass,
    } = Object.fromEntries(formData);

    if ([email, password, repass].some((el) => el == "")) {
      return notificationMsg("All fields are required!");
    }
    if (password != repass) {
      return notificationMsg("Passwords don't match");
    } else {
      try{
      await register(email, password);
      ctx.page.redirect("/");
      }catch(err){
        return notificationMsg('Error 409')
      }

    }
  };
  ctx.render(registrationTemplate(submitHandler))
};

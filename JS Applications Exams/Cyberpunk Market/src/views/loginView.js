import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../services/authService.js";
import { notificationMsg } from "./notificationMsg.js";

const loginTemplate = (SubmitHandler) => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${SubmitHandler}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>
  </section>
`;

export const loginView = (ctx) => {
  const submitHandler = async(e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let { email, password } = Object.fromEntries(formData);

    if(email =="",password==""){
        return notificationMsg("All fields are required!")
    }else{
      try{
        let user = await login(email,password)
        if(!user){
            return notificationMsg("There is no such user!")
        }
        ctx.page.redirect("/")
        }
        catch(err){
          return notificationMsg('Error 400')
        }
    }
  };

  ctx.render(loginTemplate(submitHandler))
};

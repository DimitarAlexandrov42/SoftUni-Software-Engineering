import { html } from "../../node_modules/lit-html/lit-html.js"
import { login } from "../services/authService.js"
import { setUserData } from "../utils.js"
import { clearUserData } from "../utils.js"
import { notificationMsg } from "./notificationView.js"



const loginTemplate = (submitHandler) => html`
      <section id="login">
        <div class="form">

          <h2>Login</h2>
          <form @submit=${submitHandler} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </section>
`

export const loginView = (ctx) => {


  function submitHandler(e) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const { email, password } = Object.fromEntries(formData)
    console.log(email, password);

    if (email == "" || password == "") {

      return notificationMsg("All field are required")
    } else {
    // fetch("http://localhost:3030/users/login", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ email, password })
    // })
    //   .then(res => {
    //     return res.json(); // <- This returns a Promise
    //   })
    //   .then(user => {
    //     setUserData(user);
    //     ctx.page.redirect("/");
    //   })
    //   .catch(err => {
    //   });

    login({ email, password })
      .then(user => {
        if (!user || user.code == 403) {
          clearUserData()
          return window.alert("Wrong password or email")
        }

        ctx.page.redirect("/")
      })
    .catch(err => window.alert("Server error, please try again later."))
    }

  }

  ctx.render(loginTemplate(submitHandler))

}
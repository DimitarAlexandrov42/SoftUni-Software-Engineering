import { html } from "../../node_modules/lit-html/lit-html.js"
import { register } from "../services/authService.js"
import { notificationMsg } from "./notificationView.js"

const registerTemplate = (submitHandler) => html`
    <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${submitHandler} class="register-form" >
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
      </section>
`

export const registerView = (ctx) => {


  const submitHandler = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const { email, password, ["re-password"]: repass } = Object.fromEntries(formData)


    if (email == "" || password == "" || repass == "") {

      return notificationMsg("All field are required")
    }
     if (repass !== password) {
     return window.alert("Passwords don't match")
    }

    else {
      register({ email, password })
        .then(user => {
          if (user.code == 403) {
            clearUserData()
           return window.alert("Wrong password or email")
          }

          ctx.page.redirect("/")
        })
        .catch(err => window.alert("Server error, please try again later."))

    }
  }
  ctx.render(registerTemplate(submitHandler))

}
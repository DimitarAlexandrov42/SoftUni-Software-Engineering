import { html } from '../../node_modules/lit-html/lit-html.js'
import { register } from '../services/authService.js'
import { setUserData } from '../services/utils.js'

const registerTemplate = (submitHandler) => html`
  <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="register-form" @submit=${submitHandler}>
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

  const submitHandler = async (e) => {
    e.preventDefault()
    let form = e.currentTarget
    let formData = new FormData(form)
    let { email, password, ["re-password"]: repass } = Object.fromEntries(formData)
    console.log(email, password);

    if (email == "", password == "", repass == "") {
      return alert("Fill all fields!")
    }

    if (password != repass) {
      return alert("Passwords don't match, try again!")
    }

    try {
      let user = await register({ email, password })
      if (!user) {
        return alert("There is no such user")
      }
      ctx.page.redirect("/")
    } catch (err) {
      return alert("Incorrect fields!")
    }

  }
  ctx.render(registerTemplate(submitHandler))
}
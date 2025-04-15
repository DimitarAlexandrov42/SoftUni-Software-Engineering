import { html } from "../../node_modules/lit-html/lit-html.js"
import { login } from "../services/authService.js"


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
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`

export const loginView = (ctx) => {
  const submitHandler = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const { email, password } = Object.fromEntries(formData)

    if (email == "" || password == "") {
      return alert("Fill all fields!")
    }

    try {
      const user = await login({ email, password })
      if (!user) {
        return alert("User not found!")
      }
      ctx.page.redirect("/")
    }
    catch (err) {
      alert("Login failed! Please check your email and password!")
    }






  }
  ctx.render(loginTemplate(submitHandler))

}
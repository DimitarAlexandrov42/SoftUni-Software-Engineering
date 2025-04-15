import { html } from "../../node_modules/lit-html/lit-html.js"
import { register } from "../../src/services/authService.js"

const registerTemplate = (submitHandler) => html`
 <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${submitHandler} class="register-form">
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
`

export const registerView = (ctx) => {

  const submitHandler = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const { email, password, ["re-password"]: repass } = Object.fromEntries(formData)


    if ([email, password, repass].some(el => el == "")) {
      return alert("All fields is required!")
    }
    if (password != repass) {
      return alert("Two passwords mismatch!")
    }

    try {
      const user = await register({ email, password })
      if(!user){
        return alert("There no a user with this info!")
      }
      ctx.page.redirect("/")

    }
    catch(err){
      alert("Please check your password and email")
    }
    



  }
ctx.render(registerTemplate(submitHandler))
}
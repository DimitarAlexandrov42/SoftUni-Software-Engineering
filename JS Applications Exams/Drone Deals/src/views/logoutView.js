import { clearUserData } from "../utils.js"
import { get } from "../services/api.js"
import { logout } from "../services/authService.js"


export const logoutView = (ctx) => {
    logout()
    ctx.page.redirect("/")

}
import { logout } from "../services/authService.js"
export const logoutView = async (ctx) => {

   logout()
    ctx.page.redirect("/")

}
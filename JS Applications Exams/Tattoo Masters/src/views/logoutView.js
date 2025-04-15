import { logout } from "../services/authService.js"
import { deleteUserData } from "../services/utils.js"


export const logoutView = (ctx) => {
    logout()
    deleteUserData()
    ctx.page.redirect("/")
}
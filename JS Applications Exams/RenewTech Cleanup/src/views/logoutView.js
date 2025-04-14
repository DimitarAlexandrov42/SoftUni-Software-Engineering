import { html } from "../../node_modules/lit-html/lit-html.js";
import { logout } from "../services/authService.js";
import { deleteUserData } from "../services/utils.js";

export const logoutView = (ctx)=>{
    logout()
    deleteUserData()
    ctx.page.redirect("/")
}
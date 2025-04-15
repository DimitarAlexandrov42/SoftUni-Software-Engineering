import page from "../node_modules/page/page.mjs";
import { middleWare } from "./middlewares.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

page(middleWare)
page("/",homeView)
page("/login",loginView)
page("/register",registerView)
page("/logout",logoutView)
page("/games",catalogView)
page("/create",createView)
page("/details/:id",detailsView)
page("/edit/:id",editView)



page.start()
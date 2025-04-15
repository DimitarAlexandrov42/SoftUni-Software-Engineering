import page from "../node_modules/page/page.mjs";
import { middleware } from "./middlewares.js";
import { collectionView } from "./views/collectionView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registrationView.js";

page(middleware)
page("/",homeView)
page("/login",loginView)
page("/register",registerView)
page("/collection",collectionView)
page("/logout",logoutView)
page("/create",createView)
page("/details/:id",detailsView)
page("/edit/:id",editView)


page.start()
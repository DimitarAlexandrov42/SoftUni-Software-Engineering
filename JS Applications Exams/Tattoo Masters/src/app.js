import page from "../node_modules/page/page.mjs"
import { middleware } from "./services/middleware.js"
import { dashboardView } from "./views/dashboardView.js"
import { homeView } from "./views/homeView.js"
import { loginView } from "./views/loginView.js"
import { registerView } from "./views/registerView.js"
import { logoutView } from "./views/logoutView.js"
import { createPostView } from "./views/createPostView.js"
import { detailsView } from "./views/detailsView.js"
import { editView } from "./views/editView.js"

page(middleware)
page("/", homeView)
page("/login", loginView)
page("/register", registerView)
page("/collection", dashboardView)
page("/logout", logoutView)
page("/addTatto", createPostView)
page("/details/:id", detailsView)
page("/edit/:id", editView)

page.start()
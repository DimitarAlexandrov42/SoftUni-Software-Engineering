import page from "../node_modules/page/page.mjs"
import { renderMiddleware } from "./renderMiddleware.js"
import { homeView } from "./views/homeView.js"
import { loginView } from "./views/loginView.js"
import { logoutView } from "./views/logoutView.js"
import { registerView } from "./views/registerView.js"
import { showsView } from "./views/showsView.js"
import { addShowView } from "./views/addShow.js"
import { detailsView } from "./views/detailsView.js"
import { searchView } from "./views/searchView.js"
import { editView } from "./views/editView.js"

page(renderMiddleware)
page("/", homeView)
page("/login", loginView)
page("/register", registerView)
page("/logout", logoutView)
page("/shows", showsView)
page("/shows/:id", detailsView)
page("/shows/edit/:id", editView)
page("/addShow", addShowView)
page("/search", searchView)

page.start()
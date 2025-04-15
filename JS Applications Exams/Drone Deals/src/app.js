import page from "../node_modules/page/page.mjs";
import { middleware } from "./middlewares/middleware.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { logoutView } from "./views/logoutView.js";
import { marketplaceView } from "./views/marketplaceView.js";
import { sellView } from "./views/sellView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js"

page(middleware)
page("/", homeView)
page("/login", loginView)
page("/register", registerView)
page("/logout", logoutView)
page("/marketplace", marketplaceView)
page("/marketplace/:id", detailsView)
page("/marketplace/:id/edit", editView)
page("/sell", sellView)


page.start()

// -a localhost -p 3000 -P http://localhost:3000? -c-1"
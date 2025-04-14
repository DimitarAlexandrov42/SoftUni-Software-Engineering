import page from "../node_modules/page/page.mjs";
import { middleWare } from "./middlewares/middlewares.js";
import { catalogView } from "./views/catalogView.js";
import { addSolution } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

page(middleWare);
page("/",homeView)
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/solutions", catalogView);
page("/addSolution", addSolution);
page("/details/:id", detailsView);
page("/edit/:id", editView);

page.start();

import { render } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "./services/utils.js";
import { layoutTemplate } from "./views/layoutView.js";

const renderContent = (context) => {
  const root = document.querySelector("#wrapper");
  let user = getUserData();

  render(layoutTemplate(user, context),root);
};

export const middleware = (ctx, next) => {
ctx.render = renderContent

next()
};

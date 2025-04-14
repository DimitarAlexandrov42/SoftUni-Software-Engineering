import { render } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../services/utils.js";
import { layoutTemplate } from "../views/layoutView.js";


const renderLayout = (context) => {
  const root = document.getElementById("wrapper");
  
  const user = getUserData()

    render(layoutTemplate(user, context), root);
};

export const middleWare = (ctx, next) => {
  ctx.render = renderLayout;

  next();
};

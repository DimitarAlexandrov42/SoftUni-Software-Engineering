import { render } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "../src/services/utils.js";
import { layoutTemplate } from "../src/views/layoutView.js";


const renderLayout = (context) => {
  const root = document.getElementById("content");
  
  const user = getUserData()

    render(layoutTemplate(user, context), root);
};

export const middleWare = (ctx, next) => {
  ctx.render = renderLayout;

  next();
};

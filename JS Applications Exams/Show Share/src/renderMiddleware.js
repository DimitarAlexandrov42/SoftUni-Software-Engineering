import { render } from "../node_modules/lit-html/lit-html.js"
import { layoutTemplate } from "./views/layoutView.js"
import { getUser } from "./services/utils.js"
 
const root = document.getElementById('wrapper')



export const renderMiddleware = (ctx,next) => {
    ctx.render = renderView
    
    next()
}
 const renderView = (template) => {
    const user = getUser()
     render(layoutTemplate(user,template),root)
}
import { render } from "../../node_modules/lit-html/lit-html.js"
import { getUserData } from "./utils.js"
import { layoutTemplate } from "../views/layoutView.js"

const root = document.querySelector('#content')


const renderLayout = (content) => {
    const user = getUserData()
    render(layoutTemplate(user, content), root)

}

export const middleware = (ctx, next) => {
    ctx.render = renderLayout
    next()

}


import { render } from "../../node_modules/lit-html/lit-html.js"
import { getUserData } from "../utils.js"
import { layoutTemplate } from "../views/layout.js"

const root = document.getElementById('wrapper')

export function middleware(ctx, next) {
    ctx.render = renderView

    next()
}

function renderView(context) {
    const userData = getUserData()

    render(layoutTemplate(userData, context), root)
}
import { html } from "../../node_modules/lit-html/lit-html.js"
import { searchService } from "../services/movieService.js"

const searchTemplate = (onSearch, movies) => html`
<section id="search">

   <div class="form">
        <h2>Search</h2>
        <form  class="search-form">
            <input
            type="text"
            name="search"
            id="search-input"
            />
            <button @click=${onSearch} class="button-list">Search</button>
        </form>

    </div>
    <h4>Results:</h4>
    <div class="search-result">
                 
    ${movies != undefined
        ? html`${movies.length != 0
            ? movies.map(m => oneMovieTemplate(m))
            : html`<p class="no-result">There is no TV show with this title</p>`
        }`
        : ""
    }
                   
    </div>
    </div>
</section>
    `

const oneMovieTemplate = (movies) => html`
    <div class="show" >
            <img src="${movies.imageUrl}" alt="example1" />
            <div class="show">
                <h3 class="title">${movies.title} </h3>
                <p class="genre">Genre: ${movies.genre} </p>
                <p class="country-of-origin">Country of Origin: ${movies.country} </p>
                <a class="details-btn" href="/shows/${movies._id}">Details</a>
    </div>
`

export const searchView = async(ctx) => {
    let movies = undefined
    let field = ctx.querystring.split('=')[1]
    if (field) {
        movies = await searchService(field)
        console.log(movies);

    }


    const onSearch = (e) => {
        // e.preventDefault()
        let searched = document.querySelector("#search-input").value
        if (searched === "") {
           return window.alert('Fill the field!')
        } else {
            // ctx.page.redirect(`/search?query=${searched}`)
        }


    }


    ctx.render(searchTemplate(onSearch, movies))
}

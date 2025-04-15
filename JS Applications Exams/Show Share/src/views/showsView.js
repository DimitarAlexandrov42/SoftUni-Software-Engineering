import { html } from "../../node_modules/lit-html/lit-html.js"
import { loadAllMovies } from "../services/movieService.js"

export const showsTemplate = (movies) => html`
<h2>Users Recommendations</h2>
<section id="shows">
 ${movies.map(movieTemplate)}
</section>
<!-- Display an h2 if there are no posts -->
<h2 id="no-show">No shows Added.</h2>
`

const movieTemplate = (movie) => html`
<div class="show">
   <img src="${movie.imageUrl}" alt="example1" />
   <div class="show-info">
     <h3 class="title"> ${movie.title} </h3>
     <p class="genre">Genre: ${movie.genre} </p>
     <p class="country-of-origin">Country of Origin: ${movie.country} </p>
     <a class="details-btn" href="/shows/${movie._id}">Details</a>
   </div>
 </div>
`


// '126777f5-3277-42ad-b874-76d043b069cb': {
//     _ownerId: '847ec027-f659-4086-8032-5173e2f9c93a',
//     title: 'Westworld',
//     imageUrl: '/images/westworld.jpg',
//     genre: 'Science Fiction' ,
//     country: 'United States' ,
//     details: '"Westworld" is an absolutely mind-bending sci-fi thriller that takes you on a wild ride through a futuristic theme park where guests can live out their wildest fantasies with lifelike robots, called hosts. Set in a stunningly detailed Wild West environment, the series delves into complex themes of artificial intelligence, consciousness, and morality. The story starts with guests indulging in the park\'s adventures, but soon unravels into a gripping tale of rebellion as the hosts begin to gain self-awareness. The incredible performances by an ensemble cast, especially by Evan Rachel Wood and Anthony Hopkins, elevate the show to another level. Every episode is packed with twists, philosophical musings, and stunning visuals that keep you hooked. "Westworld" isn\'t just a show; it\'s an immersive experience that challenges your perception of reality and makes you question the nature of free will. If you\'re a fan of thought-provoking sci-fi with a dark edge, "Westworld" is an absolute must-watch.' ,
//     _createdOn: 1617194295474,
//   },

export const showsView = async (ctx) => {
    const allMovies = await loadAllMovies()


    ctx.render(showsTemplate(allMovies))
}
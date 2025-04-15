import { html, nothing } from "../../node_modules/lit-html/lit-html.js"


const loggedUser = html`
       <div class="user">
          <a href="/sell">Sell</a>
          <a href="/logout">Logout</a>
        </div>
`

const guestUser = html`
       <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
`

export const layoutTemplate = (userData, content) => html`
 <header>
      <!-- Navigation -->
      <a id="logo" href="/"><img id="logo" src="./images/logo2.png" alt="img" /></a>
      <nav>
        <div>
          <a href="/marketplace">Marketplace</a>
        </div>

        <!-- Logged-in users -->
         ${userData ? loggedUser : guestUser}
        
      </nav>
    </header>

    <main id="main-element">
    ${content}  
    <main>
`




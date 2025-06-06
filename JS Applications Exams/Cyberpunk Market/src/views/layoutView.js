import { html } from "../../node_modules/lit-html/lit-html.js";


export const layoutTemplate = (user,content)=>html`
 <header>
        <!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo" src="./images/logo.png" alt="img"
        /></a>
        <nav>
          <div>
            <a href="/collection">Market</a>
          </div>

          <!-- Logged-in users -->
           ${user
            ?html`
            <div class="user">
            <a href="/create">Sell</a>
            <a href="/logout">Logout</a>
          </div>
            `
            :html`
            <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
            `
           }
          

          <!-- Guest users -->
          
        </nav>
      </header>

      <main id="main-element">
       
   ${content}
       
      </main>
`
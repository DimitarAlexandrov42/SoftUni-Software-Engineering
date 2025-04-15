import { html } from '../../node_modules/lit-html/lit-html.js'

export const layoutTemplate = (user, content) => html`
  <header>
      <!-- Navigation -->
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="logo" />
      </a>
      <nav>
        <a href="/collection">Collection</a>

        <!-- Logged-in users -->
        ${user
        ?html` <div class="user">
                     <a href="/addTatto">Add Tattoo</a>
                     <a id="logout" href="/logout">Logout</a>
               </div>`
        : 
         html` <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
            </div>`
        }
       

        <!-- Guest users -->
       
      </nav>
    </header>
    <main>
     ${content}
    </main>
`
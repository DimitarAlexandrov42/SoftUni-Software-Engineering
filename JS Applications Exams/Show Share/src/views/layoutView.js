import { html } from "../../node_modules/lit-html/lit-html.js"


export const layoutTemplate = (user,template) => html`
 <header>
        <!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/show_logo.png" alt="logo" />
        </a>
        <nav>
          <div>
            <a href="/shows">TV Shows</a>
            <a href="/search">Search</a>
          </div>

          <!-- Logged-in users -->
           ${user
        ? html` <div class="user">
                        <a href="/addShow">Add Show</a>
                        <a href="/logout">Logout</a>
                    </div>`
        :
        html`  <div class="guest">
                      <a href="/login">Login</a>
                      <a href="/register">Register</a>
                       </div>`
    }
         

          <!-- Guest users -->
          
        </nav>
      </header>

      <main>
         ${template}
      </main>
`


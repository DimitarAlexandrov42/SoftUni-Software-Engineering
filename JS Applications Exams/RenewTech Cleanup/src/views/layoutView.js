import { html } from "../../node_modules/lit-html/lit-html.js";


export const layoutTemplate = (user, context) => html`
 <header>
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo2.png" alt="logo"/>
        </a>
        <nav>
          <div>
            <a href="/solutions">Solutions</a>
          </div>

         
           ${user
           ? html`
            <div class="user">
                    <a href="/addSolution">Add Solution</a>
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
        </nav>
      </header>

      <main>
       ${context}
      </main>
`;



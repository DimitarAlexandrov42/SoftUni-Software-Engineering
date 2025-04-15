import { html } from "../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (user, context) => html`
  <header>
    <!-- Navigation -->
    <a id="logo" href="/"
      ><img id="logo-img" src="./images/logo.webp" alt="logo"
    /></a>
    <nav>
      <a href="/games">Games</a>

      <!-- Logged-in users -->
      ${user
        ? html`
            <div class="user">
              <a href="/create">Add Game</a>
              <a id="logout" href="/logout">Logout</a>
            </div>
          `
        : html`
            <div class="guest">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
          `}
    </nav>
  </header>

  <main>${context}</main>
`;

import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
  <section id="hero">
    <div id="hero-wrapper">
      <p id="hero-intro">
        Welcome to <span>Retro Games</span>, your ultimate destination for
        classic gaming! Relive the golden era of video games with our vast
        library of retro titles, spanning from 8-bit to 16-bit classics and
        beyond.
      </p>
      <a href="/register" id="sign-up">Level Up - Sign Up!</a>
    </div>
  </section>
`;

export const homeView = (ctx) => {
  ctx.render(homeTemplate());
};

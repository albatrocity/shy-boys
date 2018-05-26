import ActiveLink from "./ActiveLink";

const Navigation = ({ children }) => (
  <div>
    <style jsx>{`
      text-align: center;
      padding-bottom: 1em;
      border-bottom: 1px solid #2e6f92;
      font-family: "Fredoka One", cursive;
      margin-bottom: 1em;
      z-index: 10;
      position: relative;
      a {
        margin: 1em;
        text-decoration: none;
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: transparent;
      }
      a:hover {
        color: #bb2378;
      }
      @media (max-width: 420px) {
        a {
          margin: 0.4em;
        }
      }
      @media (max-width: 320px) {
        a {
          margin: 0.4em;
          font-size: 13px;
        }
      }
    `}</style>
    <ActiveLink href="/">news</ActiveLink>
    <ActiveLink href="/music">music</ActiveLink>
    <ActiveLink href="/tour">tour</ActiveLink>
    <ActiveLink href="/about">about</ActiveLink>
    <ActiveLink href="/contact">contact</ActiveLink>
  </div>
);

export default Navigation;

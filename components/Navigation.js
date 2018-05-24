import Link from "next/link";

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
        border-color: #2e6f92;
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
    <Link href="/">
      <a>news</a>
    </Link>
    <Link href="/music">
      <a>music</a>
    </Link>
    <Link href="/tour">
      <a>tour</a>
    </Link>
    <Link href="/about">
      <a>about</a>
    </Link>
    <Link href="/contact">
      <a>contact</a>
    </Link>
  </div>
);

export default Navigation;

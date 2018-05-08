import Link from 'next/link'

const Navigation = ({children}) => (
  <div>
    <style jsx>{`
      text-align: center;
      padding-bottom: 1em;
      border-bottom: 1px solid #2e6f92;
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
    `}</style>
    <Link href="/">
      <a>news</a>
    </Link>
    <Link as="/music" href="/pages?slug=music">
      <a>music</a>
    </Link>
    <Link href="/tour">
      <a>tour</a>
    </Link>
    <Link as="/about" href="/pages?slug=about">
      <a>about</a>
    </Link>
    <Link href="/contact">
      <a>contact</a>
    </Link>
  </div>
)

export default Navigation

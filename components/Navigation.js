import Link from 'next/link'

const Navigation = ({children}) => (
  <div>
    <style jsx>{`
      text-align: center;
      a {
        margin: 1em;
      }
    `}</style>
    <Link href="/">
      <a>house</a>
    </Link>
    <Link href="/tour">
      <a>tour</a>
    </Link>
  </div>
)

export default Navigation

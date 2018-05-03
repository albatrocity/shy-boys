import Link from 'next/link'

const Pagination = ({ currentPage, totalPages, previous, next, pages, route }) => {
  if (!next && !previous) { return null };
  return (
    <div>
      <style jsx>{`
        text-align: center;
        a {
          margin: 1em;
        }
        .pagination-nav {
          margin: 0 1em;
        }
      `}</style>
      { previous &&
        <Link className='pagination-nav' href={`${route}?page=${currentPage - 1}`}>
          <a>previous</a>
        </Link>
      }
      <span className='pagination-current'> page { currentPage }</span>
      { next &&
        <Link href={`${route}?page=${currentPage + 1}`}>
          <a>next</a>
        </Link>
      }
    </div>
  )
}

export default Pagination

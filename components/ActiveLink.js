import { withRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ children, router, href }) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      <style jsx>{`
        a {
          margin: 1em;
          text-decoration: none;
          border-width: 0 0 1px 0;
          border-style: solid;
          border-color: transparent;
          color: ${router.pathname === href ? "#bb2378" : "#402f51"};
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
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);

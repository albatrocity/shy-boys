const Button = ({ href, children }) => (
  <a href={href} className="button">
    <style jsx>{`
      .button {
        display: flex;
        background: #bb2378;
        font-family: "Fredoka One", cursive;
        font-weight: normal;
        font-style: normal;
        font-variant: normal;
        font-size: 12px;
        letter-spacing: 0.1em;
        text-decoration: none;
        color: #fff;
        border-radius: 0.4em;
        padding: 0.4em;
        flex-grow: 1;
        text-align: center;
        text-transform: uppercase;
      }
    `}</style>
    {children}
  </a>
);

export default Button;

const Contact = ({ name, type, email }) => (
  <div className="contact">
    <style jsx>{`
      .contact {
        padding: 1em;
        flex-grow: 1;
        text-align: center;
      }
      .contact-type {
        text-transform: uppercase;
        font-weight: 600;
      }
      .contact-type,
      .contact-name {
        font-family: "Fredoka One", cursive;
        font-weight: normal;
      }
    `}</style>
    <div>
      <span className="contact-type">{type}</span> |{" "}
      <span className="contact-name">{name}</span>
    </div>
    <div>
      <span className="contat-email">
        <a href={`mailto:${email}`}>{email}</a>
      </span>
    </div>
  </div>
);

export default Contact;

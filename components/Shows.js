import ShowEvent from "./ShowEvent";

const Shows = ({ data, compact }) => (
  <div className="shows">
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
    {data && data.map(x => <ShowEvent data={x} compact={compact} />)}
  </div>
);

export default Shows;

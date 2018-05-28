import { format } from "date-fns";
import Button from "./Button";

const ShowEvent = ({
  data: { url, datetime, description, venue, offers, lineup, on_sale_datetime },
  compact
}) => (
  <div className="shows-show">
    <style jsx>{`
      .shows-show {
        margin: 0 auto;
      }
      p {
        margin: 0;
      }
      h4 {
        font-weight: normal;
        margin: 0;
      }
      .shows-show-date a,
      .shows-show-info a {
        text-decoration: none;
      }
      .shows-show {
        display: flex;
        flex-direction: row;
        margin-bottom: ${compact ? 0 : "1em"};
        border-bottom: ${compact ? "none" : "1px solid #2e6f92"};
        padding-bottom: ${compact ? 0 : "1em"};
      }
      .shows-show-date {
        padding-right: 0.6em;
        flex-shrink: 1;
        text-align: right;
        flex-basis: 50px;
      }
      .shows-show-info {
        flex-grow: 1;
      }
      .shows-show-date h4 {
        color: #0e6c90;
      }
      .shows-show-info h4 {
        margin-bottom: 0.2em;
      }
      .shows-show-actions {
        flex-shrink: 1;
        margin-left: 0.3em;
      }
      .shows-show-date .full-date {
        display: none;
      }
      .shows-show-date .short-date {
        display: block;
      }

      @media (max-width: 420px) {
        .shows-show {
          flex-direction: column;
        }
        .shows-show-date {
          text-align: left;
          flex-basis: auto;
        }
        .shows-show-date .full-date {
          display: block;
        }
        .shows-show-date .short-date {
          display: none;
        }
        .shows-show-actions {
          margin-left: 0;
        }
      }
    `}</style>
    <div className="shows-show-date">
      <a href={url}>
        <h4 className="short-date">{format(datetime, "M/D")}</h4>
        <h4 className="full-date">{format(datetime, "MMMM Do")}</h4>
      </a>
    </div>
    <div className="shows-show-info">
      <a href={url}>
        <h4>
          {venue.city}, {venue.region} @ {venue.name}
        </h4>
      </a>
      <p>{description !== "Shy Boys" ? description : null}</p>
    </div>
    <div className="shows-show-actions">
      {offers.map(x => (
        <Button key={x.url} href={x.url}>
          {x.type}
        </Button>
      ))}
    </div>
  </div>
);

export default ShowEvent;

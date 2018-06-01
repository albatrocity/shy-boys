import BandcampAlbum from "./BandcampAlbum";
import { format, isBefore } from "date-fns";

const thumbnailSize = "245px";

const releaseDateInfo = date =>
  isBefore(new Date(), date)
    ? `release date: ${format(date, "M/D/YYYY")}`
    : format(date, "YYYY");

const Release = ({
  title,
  listenUrl,
  purchaseUrl,
  playerEmbed,
  releasedAt,
  cover,
  bandcampAlbumId
}) => (
  <div className="release">
    <style jsx>{`
      .release {
        max-width: ${thumbnailSize};
        flex-basis: ${thumbnailSize};
        margin-bottom: 2em;
      }
      .album-art {
        width: ${thumbnailSize};
        height: ${thumbnailSize};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        margin-bottom: 0.6em;
      }
      iframe {
        width: ${thumbnailSize};
        height: ${thumbnailSize};
        display: block;
        overflow: hidden;
      }
      h3 {
        margin: 0;
      }
    `}</style>
    {playerEmbed ? (
      bandcampAlbumId ? (
        <div className="album-art">
          <BandcampAlbum albumId={bandcampAlbumId} />
        </div>
      ) : (
        <div
          className="album-art"
          dangerouslySetInnerHTML={{ __html: playerEmbed }}
        />
      )
    ) : (
      <a href={purchaseUrl || listenUrl}>
        <img className="album-art" src={cover.thumb_url} />
      </a>
    )}
    <h3>
      <a href={purchaseUrl || listenUrl}>{title}</a>
    </h3>
    <small>{releaseDateInfo(releasedAt)}</small>
  </div>
);

export default Release;

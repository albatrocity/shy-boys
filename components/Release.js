import BandcampAlbum from "./BandcampAlbum";
import { format } from "date-fns";

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
        max-width: 250px;
        flex-basis: 250px;
        margin-bottom: 2em;
      }
      .album-art {
        max-width: 250px;
      }
      iframe {
        width: 250px;
        height: 250px;
      }
      h3 {
        margin: 0;
      }
    `}</style>
    {playerEmbed ? (
      bandcampAlbumId ? (
        <BandcampAlbum albumId={bandcampAlbumId} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: playerEmbed }} />
      )
    ) : (
      <img className="album-art" src={cover.thumb_url} />
    )}
    <h3>
      <a href={purchaseUrl || listenUrl}>{title}</a>
    </h3>
    <small>released {format(releasedAt, "M/D/YYYY")}</small>
  </div>
);

export default Release;

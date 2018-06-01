const style = {
  border: 0,
  width: "245px",
  height: "245px"
};

const BandcampAlbum = ({ albumId, title, listenUrl }) => (
  <iframe
    style={style}
    src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/`}
    seamless
  >
    <a href={listenUrl}>{title} by Shy Boys</a>
  </iframe>
);

export default BandcampAlbum;

import { SocialIcon } from "react-social-icons";

const iconStyle = {
  width: 30,
  height: 30,
  marginLeft: "0.5em",
  marginRight: "0.5em"
};

const SocialLinks = () => (
  <div className="socialLinks">
    <style jsx>{`
      .socialLinks {
        display: flex;
        justify-content: center;
        margin-bottom: 1em;
      }
    `}</style>
    <SocialIcon
      style={iconStyle}
      url="https://www.instagram.com/shy_boys"
      color="#bb2378"
    />
    <SocialIcon
      style={iconStyle}
      url="https://www.facebook.com/shyboys/"
      color="#bb2378"
    />
    <SocialIcon
      style={iconStyle}
      url="https://twitter.com/shyboyskc"
      color="#bb2378"
    />
    <SocialIcon
      style={iconStyle}
      url="https://www.bandsintown.com/a/2770847"
      color="#bb2378"
    />
    <SocialIcon
      style={iconStyle}
      url="https://open.spotify.com/artist/7hDw3suvKY0KLud00BuzHL"
      color="#bb2378"
    />
    <SocialIcon
      style={iconStyle}
      url="https://itunes.apple.com/us/artist/shy-boys/630072139"
      color="#bb2378"
    />
  </div>
);

export default SocialLinks;

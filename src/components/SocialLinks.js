import React, { useContext } from "react"
import { SocialIcon } from "react-social-icons"
import { Box, ThemeContext } from "grommet"

const urls = [
  "https://www.instagram.com/shy_boys",
  "https://www.facebook.com/shyboys/",
  "https://twitter.com/shyboyskc",
  "https://www.bandsintown.com/a/2770847",
  "https://open.spotify.com/artist/7hDw3suvKY0KLud00BuzHL",
  "https://itunes.apple.com/us/artist/shy-boys/630072139",
]

const SocialLinks = () => {
  const theme = useContext(ThemeContext)
  return (
    <Box direction="row" wrap={true} gap="small">
      {urls.map(x => (
        <SocialIcon
          key={x}
          style={{ width: "30px", height: "30px" }}
          bgColor={theme.global.colors.brand}
          url={x}
        />
      ))}
    </Box>
  )
}

export default SocialLinks

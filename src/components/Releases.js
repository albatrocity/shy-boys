import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "grommet"
import { sortBy, reverse } from "lodash/fp"

import ListItemRelease from "./ListItemRelease"

const releases = [
  {
    title: "Shy Boys",
    artFile: "st",
    format: "LP",
    label: "High Dive",
    year: "2014",
    physical: "https://highdiverecords.bandcamp.com/album/shy-boys-shy-boys-2",
    spotify:
      "https://open.spotify.com/album/4c14HIsehJaxaNQAkhUQBP?si=vxFKj_gkQGim2zKuankcdA",
    apm: "https://music.apple.com/us/album/shy-boys/805628014",
  },
  {
    title: "45",
    artFile: "fourtyFive",
    format: "7 inch",
    label: "High Dive",
    year: "2014",
    physical: "https://highdiverecords.bandcamp.com/album/shy-boys-45",
    spotify:
      "https://open.spotify.com/album/4eWqBZmwtZVUKa4kGhjMgL?si=knx35tvFThGmm_SOBMudCA",
    apm: "https://music.apple.com/us/album/45-single/898362462",
  },
  {
    title: "Bell House",
    artFile: "bellHouse",
    format: "LP",
    label: "Polyvinyl",
    year: "2018",
    physical: "http://plyvnyl.co/bell-house",
    spotify:
      "https://open.spotify.com/album/5FQqHxs3Nl2Lz6ggKuSGgW?si=JPjaohenSGyS5zT4v9mDKQ",
    apm: "https://music.apple.com/us/album/bell-house/1389783839",
  },
  {
    title: "Dim the Light/Brick by Brick",
    artFile: "dimBrick",
    format: "Single",
    label: "Polyvinyl",
    year: "2019",
    spotify:
      "https://open.spotify.com/album/1Mj5RPTMNJgRjMemf1S236?si=wFH1gIu-RUa8beQdF3NRYA",
    apm:
      "https://music.apple.com/us/album/dim-the-light-brick-by-brick-single/1451341347",
  },
]

const Releases = () => {
  const data = useStaticQuery(graphql`
    query ReleaseImages {
      st: file(relativePath: { eq: "releases/self-titled.jpg" }) {
        id
        publicURL
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fourtyFive: file(relativePath: { eq: "releases/45.jpg" }) {
        id
        publicURL
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bellHouse: file(relativePath: { eq: "releases/bell-house.jpg" }) {
        id
        publicURL
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dimBrick: file(relativePath: { eq: "releases/dim-brick.jpg" }) {
        id
        publicURL
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box gap="small" flex={{ grow: 1 }}>
      {reverse(sortBy(["year"], releases)).map((x, i) => (
        <ListItemRelease
          key={x.title}
          {...x}
          image={data[x.artFile]}
          first={i === 0}
        />
      ))}
    </Box>
  )
}

export default Releases

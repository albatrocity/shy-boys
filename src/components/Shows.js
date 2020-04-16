import React, { useState, useEffect } from "react"
import { Box, Heading, Text } from "grommet"

import ListItemShow from "./ListItemShow"

const Shows = () => {
  const [data, setData] = useState({ events: [], fetching: true })
  useEffect(() => {
    async function fetchData() {
      const req = await fetch("/.netlify/functions/shows")
      const json = await req.json()
      setData({ events: json, fetching: false })
    }
    fetchData()
  }, [])

  return (
    <Box>
      <Heading level={2}>Shows</Heading>
      {data.fetching && <Text>Fetching shows...</Text>}
      {!data.fetching && data.events.length === 0 && (
        <Text>No shows on the books :(</Text>
      )}
      <Box>
        {data.events.map(x => (
          <ListItemShow key={x.datetime} {...x} />
        ))}
      </Box>
    </Box>
  )
}

export default Shows

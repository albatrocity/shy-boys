import React from "react";
import {
  Box,
  Heading,
  Text,
  Anchor,
  ThemeContext,
  Paragraph,
  Button
} from "grommet";
import { format, parse } from "date-fns";

const ListItemShow = ({
  url,
  datetime,
  description,
  venue,
  offers,
  lineup,
  on_sale_datetime
}) => {
  const d = new Date(datetime);
  return (
    <Box
      direction="row"
      gap="medium"
      justify="between"
      border={{ side: "bottom", style: "solid", color: "light-2" }}
      margin={{ bottom: "medium" }}
    >
      <Box className="shows-show-date" flex={{ shrink: 0 }}>
        <Heading level={4} margin="0" className="short-date">
          <Anchor href={url}>{format(d, "M/d")}</Anchor>
        </Heading>
      </Box>
      <Box
        className="shows-show-info"
        textAlign="left"
        flex={{ grow: 1, shrink: 1 }}
      >
        <Text level={4} truncate={true}>
          <Anchor href={url}>
            {venue.city && `${venue.city}, `}
            {venue.region && `${venue.region}`} @ {venue.name}
          </Anchor>
        </Text>
        <Box direction="row" wrap={true}>
          {offers.map(x => (
            <Button key={x.url} href={x.url} label={x.type} />
          ))}
        </Box>
        <Paragraph>{description !== "Shy Boys" ? description : null}</Paragraph>
      </Box>
    </Box>
  );
};

export default ListItemShow;

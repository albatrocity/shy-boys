import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: ${p => p.height}px;
  width: ${p => p.width}px;
  bottom: -52px;
  left: -184px;

  img {
    margin-bottom: 0;
  }

  ${p => `@media only screen ${`and (max-width: ${p.theme.global.breakpoints.small.value}px)`} {
    display: none;
  }`}
`;

const Clown = () => {
  const data = useStaticQuery(graphql`
    query ClownQuery {
      clown: file(relativePath: { eq: "clown1.png" }) {
        publicURL
        childImageSharp {
          fixed {
            height
            width
          }
        }
      }
    }
  `);

  const { clown } = data;

  return (
    <Container
      height={clown.childImageSharp.fixed.height}
      width={clown.childImageSharp.fixed.width}
      justify="end"
    >
      <img src={clown.publicURL} />
    </Container>
  );
};

export default Clown;

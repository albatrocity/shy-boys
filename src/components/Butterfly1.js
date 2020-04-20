import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  max-width: ${p => p.width}px;
  width: 8vw;
  top: 7px;
  left: 2%;
  z-index: 10;

  @media only screen ${p =>
      `and (max-width: ${p.theme.global.breakpoints.small.value}px)`} {
    width: ${p => p.width / 2}px;
  }

  img {
    margin-bottom: 0;
  }
`;

const Butterfly1 = () => {
  const data = useStaticQuery(graphql`
    query Butterfly1Query {
      butterfly: file(relativePath: { eq: "butterfly1.png" }) {
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

  const { butterfly } = data;

  return (
    <Container
      height={butterfly.childImageSharp.fixed.height}
      width={butterfly.childImageSharp.fixed.width}
      justify="end"
    >
      <img src={butterfly.publicURL} />
    </Container>
  );
};

export default Butterfly1;

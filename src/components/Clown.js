import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: ${p => p.height};
  width: ${p => p.width};
  bottom: -52px;
  left: -160px;

  img {
    margin-bottom: 0;
  }
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

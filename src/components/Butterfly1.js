import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: ${p => p.height};
  max-width: ${p => p.width};
  width: 8vw;
  top: 57px;
  left: 3%;
  z-index: 10;

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

import React, { Component } from "react";
import AnimationArea from "./AnimationArea";
import Container from "./Container";
import Head from "next/head";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import Logo from "./pushables/Logo";
import Leaf2 from "./pushables/Leaf2";
import Leaf5 from "./pushables/Leaf5";
import { format } from "date-fns";

class Layout extends Component {
  render() {
    const { xSmallNoPadding } = this.props;
    const currentDate = new Date();
    const currentYear = format(new Date(), "YYYY");
    return (
      <div>
        <Head>
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, i nitial-scale=1"
          />
          <meta property="og:title" content="Shy Boys" key="og:title" />
        </Head>
        <style jsx global>{`
          body,
          html {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            color: #082738;
            font-size: 1em;
          }
          body a {
            color: #402f51;
          }
          h1,
          h2,
          h3,
          h4 {
            font-family: "Fredoka One", cursive;
            font-weight: normal;
            font-style: normal;
            font-variant: normal;
            color: #402f51;
            margin: 1.414em 0 0.5em;
            font-weight: inherit;
            line-height: 1.2;
          }
          p {
            font-family: "EB Garamond";
            font-style: normal;
            font-variant: normal;
            font-weight: 400;
            line-height: 29px;
          }

          html {
            font-size: 1em;
          }

          body {
            background-color: white;
            font-family: "Libre Baskerville", serif;
            font-weight: 400;
            line-height: 1.45;
            color: #333;
          }

          p {
            margin-bottom: 1.3em;
          }

          h1,
          h2,
          h3,
          h4 {
            margin: 1.414em 0 0.5em;
            font-weight: inherit;
            line-height: 1.2;
          }

          h1 {
            margin-top: 0;
            font-size: 1.602em;
          }

          h2 {
            font-size: 1.424em;
          }

          h3 {
            font-size: 1.266em;
          }

          h4 {
            font-size: 1.125em;
          }

          small,
          .font_small {
            font-size: 0.889em;
          }
          blockquote {
            font-family: "EB Garamond";
            font-size: 22px;
            font-style: normal;
            font-variant: normal;
            font-weight: 400;
            line-height: 29px;
          }
          pre {
            font-family: "EB Garamond";
            font-size: 15px;
            font-style: normal;
            font-variant: normal;
            font-weight: 400;
            line-height: 29px;
          }

          footer {
            text-align: center;
          }

          @media (max-width: 420px) {
            html {
              font-size: 0.875em;
            }
          }
        `}</style>
        <AnimationArea />
        <Container xSmallNoPadding={xSmallNoPadding}>
          <Logo />
          <Leaf2 />
          <Leaf5 />
          <Navigation />
          {this.props.children}
          <footer>
            <SocialLinks />
            <small>
              &copy; {currentYear} Shy Boys - Artwork by{" "}
              <a href="https://kitlandwehr.format.com">Kit Landwehr</a>
            </small>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Layout;

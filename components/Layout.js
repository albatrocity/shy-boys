import React, { Component } from "react";
import AnimationArea from "./AnimationArea";
import Container from "./Container";
import Head from "next/head";
import Navigation from "./Navigation";
import Pushable from "../components/Pushable";
import Logo from "./pushables/Logo";
import Leaf2 from "./pushables/Leaf2";
import Leaf5 from "./pushables/Leaf5";

class Layout extends Component {
  render() {
    const { xSmallNoPadding } = this.props;
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
          }
          body a {
            color: #402f51;
          }
          h1 {
            font-family: "Fredoka One", cursive;
            font-size: 29px;
            font-style: normal;
            font-variant: normal;
            font-weight: 500;
            line-height: 29px;
            color: #402f51;
          }
          h2 {
            font-family: "Fredoka One", cursive;
            color: #402f51;
          }
          h3 {
            font-family: "Fredoka One", cursive;
            font-size: 22px;
            font-style: normal;
            font-variant: normal;
            font-weight: 500;
            line-height: 29px;
            color: #402f51;
          }
          p {
            font-family: "EB Garamond";
            font-size: 18px;
            font-style: normal;
            font-variant: normal;
            font-weight: 400;
            line-height: 29px;
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
        `}</style>
        <AnimationArea />
        <Container xSmallNoPadding={xSmallNoPadding}>
          <Logo />
          <Leaf2 />
          <Leaf5 />
          <Navigation />
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Layout;

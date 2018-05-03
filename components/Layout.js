import React, { Component } from 'react';
import AnimationArea from './AnimationArea';
import Container from './Container';
import Head from 'next/head';
import Navigation from './Navigation';
import Pushable from '../components/Pushable';
import Logo from './pushables/Logo';
import Leaf2 from './pushables/Leaf2';
import Leaf5 from './pushables/Leaf5';

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta key="viewport" name="viewport" content="width=device-width, i nitial-scale=1"/>
          <meta property="og:title" content="Shy Boys" key="og:title"/>
        </Head>
        <style jsx global>{`
          body, html {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            background: url("/static/images/blue_bg.jpg");
            font-family: 'EB Garamond', serif;
            color: #082738;
          }
          body a {
            color: #b03177;
          }
        `}</style>
        <AnimationArea />
        <Container>
          <Logo />
          <Leaf2 />
          <Leaf5 />
          <Navigation />
          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default Layout

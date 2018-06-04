import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Releases from "../components/Releases";
import { apiUrl } from "../config/urls";

const Music = ({ page, releases, videos }) => (
  <Layout>
    <Head>
      <meta property="og:title" content={`${page.title} - Shy Boys`} />
      <meta property="og:site_name" content="Shy Boys" />
      <title>{page.title} - Shy Boys</title>
      <meta
        property="og:image:url"
        content={(page.images[0] || {}).url}
        key="og:image:url"
      />
    </Head>
    <style jsx>{`
      section.content-type {
        margin: 1em 0;
        border-bottom: 1px solid #2e6f92;
        padding-bottom: 1em;
      }
      section.content-type:last-child {
        border-bottom: none;
      }
    `}</style>
    {page.images.length > 0 && (
      <section className="images">
        <ImageSlider images={page.images} />
      </section>
    )}
    <section dangerouslySetInnerHTML={{ __html: page.content }} />

    <section className="content-type">
      <h1>Releases</h1>
      <Releases data={releases} />
    </section>

    <section className="content-type">
      <h1 id="#videos">Videos</h1>
      <section dangerouslySetInnerHTML={{ __html: videos.content }} />
    </section>
  </Layout>
);

Music.getInitialProps = async context => {
  const res = await fetch(`${apiUrl}/pages/music`);
  const json = await res.json();
  const releasesRes = await fetch(`${apiUrl}/releases`);
  const releasesJson = await releasesRes.json();
  const vidsRes = await fetch(`${apiUrl}/pages/videos`);
  const vidsJson = await vidsRes.json();
  return { page: json, releases: releasesJson, videos: vidsJson };
};

export default Music;

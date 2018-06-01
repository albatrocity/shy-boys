import Head from "next/head";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Releases from "../components/Releases";
import { apiUrl } from "../config/urls";

const Music = ({ page, releases }) => (
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
    {page.images.length > 0 && (
      <section className="images">
        <ImageSlider images={page.images} />
      </section>
    )}
    <section dangerouslySetInnerHTML={{ __html: page.content }} />
    <Releases data={releases} />
  </Layout>
);

Music.getInitialProps = async context => {
  const res = await fetch(`${apiUrl}/pages/music`);
  const json = await res.json();
  const releasesRes = await fetch(`${apiUrl}/releases`);
  const releasesJson = await releasesRes.json();
  return { page: json, releases: releasesJson };
};

export default Music;

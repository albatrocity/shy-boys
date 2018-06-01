import Head from "next/head";
import Layout from "../components/Layout";
import { setupPushables, handleMouseMove } from "../lib/pushables";
import fetch from "isomorphic-unfetch";
import { apiUrl } from "../config/urls";

const Page = ({ page }) => (
  <Layout>
    <Head>
      <title>{page.title} - Shy Boys</title>
      <meta
        key="og:title"
        property="og:title"
        content={`${page.title} - Shy Boys`}
      />
      <meta key="og:site_name" property="og:site_name" content="Shy Boys" />
      {page.ogContent && (
        <meta
          key="og:description"
          property="og:description"
          content={page.ogContent}
        />
      )}
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
  </Layout>
);

Page.getInitialProps = async context => {
  const res = await fetch(`${apiUrl}/pages/${context.query.slug}`);
  const json = await res.json();
  return { page: json };
};

export default Page;

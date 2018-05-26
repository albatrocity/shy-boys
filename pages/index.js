import Head from "next/head";
import Layout from "../components/Layout";
import { setupPushables, handleMouseMove } from "../lib/pushables";
import fetch from "isomorphic-unfetch";
import PostsView from "../components/PostsView";
import Pagination from "../components/Pagination";
import Shows from "../components/Shows";
import { apiUrl } from "../config/urls";

const Index = ({ posts, shows }) => (
  <Layout>
    <Head>
      <title>Shy Boys</title>
      <meta property="og:image:url" content={posts.image} key="og:image:url" />
      <meta property="description" content={posts.meta} key="description" />
      <meta
        property="og:description"
        content={posts.meta}
        key="og:description"
      />
    </Head>
    <section className="shows">
      <style jsx>{`
        .shows {
          background: rgba(255, 255, 255, 0.3);
          padding: 1em;
          margin-bottom: 1em;
          border-radius: 0.4em;
        }
        h3 {
          margin-top: 0;
        }
      `}</style>
      <h3>Next show...</h3>
      <Shows data={[shows[0]]} compact={true} />
    </section>
    <PostsView data={posts.results} />
    <Pagination {...posts} route="/posts" />
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(`${apiUrl}/posts`);
  const json = await res.json();
  const showsRes = await fetch(`${apiUrl}/shows`);
  const shows = await showsRes.json();
  return { posts: json, shows };
};

export default Index;

import Layout from "../components/Layout";
import Head from "next/head";
import { setupPushables, handleMouseMove } from "../lib/pushables";
import fetch from "isomorphic-unfetch";
import PostView from "../components/PostView";
import { apiUrl } from "../config/urls";

const Post = ({ post }) => (
  <Layout>
    <Head>
      <title>{post.title} - Shy Boys</title>
      <meta property="og:title" content={post.title} key="og:title" />
      <meta
        property="og:image:url"
        content={(post.images[0] || {}).url}
        key="og:image:url"
      />
      {post.ogContent && (
        <meta
          key="og:description"
          property="og:description"
          content={post.ogContent}
        />
      )}
    </Head>
    <PostView {...post} />
  </Layout>
);

Post.getInitialProps = async context => {
  const res = await fetch(`${apiUrl}/posts/${context.query.slug}`);
  const json = await res.json();
  return { post: json };
};

export default Post;

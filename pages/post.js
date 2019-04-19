import Layout from "../components/Layout";
import Head from "next/head";
import { setupPushables, handleMouseMove } from "../lib/pushables";
import fetch from "isomorphic-unfetch";
import PostView from "../components/PostView";
import { apiUrl } from "../config/urls";

const Post = ({ post = { images: [] } }) => (
  <Layout>
    <Head>
      <title>{post.title} - Shy Boys</title>
      <meta property="og:title" content={post.title} key="og:title" />
      <meta
        property="og:url"
        content={`https://www.shyboys.website/posts/${post.slug}`}
        key="og:url"
      />
      <meta property="og:type" content="article" key="og:type" />
      {post.images.map(x => (
        <React.Fragment>
          <meta property="og:image:url" content={x.url} key="og:image:url" />
          <meta
            property="og:image:height"
            content={x.height}
            key="og:image:height"
          />
          <meta
            property="og:image:width"
            content={x.width}
            key="og:image:width"
          />
        </React.Fragment>
      ))}
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
  try {
    const res = await fetch(`${apiUrl}/posts/${context.query.slug}`);
    const json = await res.json();
    return { post: json };
  } catch (e) {
    return { post: { title: "Post not found" } };
  }
};

export default Post;

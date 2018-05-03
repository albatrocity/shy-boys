import Layout from '../components/Layout';
import Head from 'next/head';
import { setupPushables, handleMouseMove } from '../lib/pushables';
import fetch from 'isomorphic-unfetch';
import PostView from '../components/PostView';
import { apiUrl } from '../config/urls';

const Post = ({ post }) => (
  <Layout>
    <Head>
      <title>{post.title} - Shy Boys</title>
    </Head>
    <PostView {...post } />
  </Layout>
)

Post.getInitialProps = async (context) => {
  const res = await fetch(`${apiUrl}/posts/${context.query.slug}`)
  const json = await res.json()
  return { post: json }
}

export default Post

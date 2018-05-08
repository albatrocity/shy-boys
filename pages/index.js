import Head from 'next/head';
import Layout from '../components/Layout';
import { setupPushables, handleMouseMove } from '../lib/pushables';
import fetch from 'isomorphic-unfetch';
import PostsView from '../components/PostsView';
import Pagination from '../components/Pagination';
import { apiUrl } from '../config/urls';


const Index = ({ posts }) => (
  <Layout>
    <Head>
      <title>Shy Boys</title>
      <meta property="og:image:url" content={ posts.image } key="og:image:url"/>
      <meta property="description" content={ posts.meta } key="description"/>
      <meta property="og:description" content={ posts.meta } key="og:description"/>
    </Head>
    <PostsView data={ posts.results } />
    <Pagination {...posts} route="/posts" />
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(`${apiUrl}/posts`)
  const json = await res.json()
  console.log(json);
  return { posts: json }
}

export default Index

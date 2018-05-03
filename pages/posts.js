import Layout from '../components/Layout';
import { setupPushables, handleMouseMove } from '../lib/pushables';
import fetch from 'isomorphic-unfetch';
import PostsView from '../components/PostsView';
import Pagination from '../components/Pagination';

const Posts = ({ posts }) => {
  return (
  <Layout>
    <PostsView data={posts.results} />
    <Pagination {...posts} route="/posts" />
  </Layout>)
}
//
Posts.getInitialProps = async (context) => {
  const res = await fetch(`${apiUrl}/posts${context.query.page ? `?page=${context.query.page}` : ''}`)
  const json = await res.json()
  return { posts: json }
}

export default Posts

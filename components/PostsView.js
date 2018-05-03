import PostView from './PostView';

const PostsView = ({data}) => (
  <div>{data.map(x => <PostView key={x._id} {...x} />)}</div>
)

export default PostsView

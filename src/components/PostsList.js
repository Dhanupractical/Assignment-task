import { Link } from 'react-router-dom';

function PostsList({ posts = [], isLoading }) {
  return (
    <div
      style={{
        flexDirection: 'column',
      }}>
      <h1>Posts</h1>
      {isLoading
        ? 'Please wait! Posts are loading'
        : posts.length > 0
        ? posts.map((post) => {
            return (
              <div
                style={{
                  boxShadow: '0 3px 20px rgba(0,0,0,0.1)',
                  marginBottom: '1em',
                  padding: '0.1em 1.5em',
                  borderRadius: '6px',
                }}
                key={post.id}>
                <Link
                  style={{
                    color: '#000',
                  }}
                  to={`/posts/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
                <p>{post.body}</p>
              </div>
            );
          })
        : 'No posts found'}
    </div>
  );
}

export default PostsList;

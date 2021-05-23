import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from '../redux/actions/AuthActions';
import { PostsList } from '../components';
import { GetPosts } from '../redux/actions/PostActions';
function Posts() {
  const dispatch = useDispatch();
  const { posts, fetchingPosts } = useSelector((state) => state.PostReducer);
  const onPressLogout = () => {
    dispatch(LogOut());
  };
  useEffect(() => {
    dispatch(GetPosts());
  }, []);
  return (
    <div>
      <button onClick={onPressLogout}>logout</button>
      <PostsList isLoading={fetchingPosts} posts={posts} />
    </div>
  );
}

export default Posts;

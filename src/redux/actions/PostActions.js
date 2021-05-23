import { PostTypes } from '../types';
import { BASE_URL } from '../../config';
const gettingPosts = () => ({
  type: PostTypes.FETCHING_POSTS,
});
const gotPosts = (posts) => ({
  type: PostTypes.FETCHED_POSTS,
  payload: posts,
});
const gettingIndividualPost = () => ({
  type: PostTypes.GETTING_INDIVIDUAL_POST,
});
const gotIndividualPost = (individualPost) => ({
  type: PostTypes.GOT_INDIVIDUAL_POST,
  payload: individualPost,
});
const gettingPostComments = () => ({
  type: PostTypes.GETTING_POST_COMMENTS,
});
const gotPostComments = (postComments) => ({
  type: PostTypes.GOT_POST_COMMENTS,
  payload: postComments,
});
export const GetPosts = () => async (dispatch) => {
  try {
    console.log('getting posts');
    dispatch(gettingPosts());
    const response = await fetch(`${BASE_URL}/posts`);
    const posts = await response.json();
    console.log('got posts ', posts);
    dispatch(gotPosts(posts));
  } catch (e) {
    console.log('error fetching posts ', e);
    dispatch(gotPosts([]));
  }
};
export const GetIndividualPost = (postId) => async (dispatch) => {
  try {
    console.log('getting individual post');
    dispatch(gettingIndividualPost());
    const response = await fetch(`${BASE_URL}/posts/${postId}`);
    const individualPost = await response.json();
    console.log('got individual post ', individualPost);
    dispatch(gotIndividualPost(individualPost));
  } catch (e) {
    console.log('error getting individual post ', e);
    dispatch(gotIndividualPost({}));
  }
};
export const GetPostComments = (postId) => async (dispatch) => {
  try {
    console.log('getting post comments');
    dispatch(gettingPostComments());
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    const postComments = await response.json();
    console.log('got post comments ', postComments);
    dispatch(gotPostComments(postComments));
  } catch (e) {
    console.log('error getting post comments ', e);
    dispatch(gotPostComments([]));
  }
};

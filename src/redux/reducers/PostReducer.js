import { PostTypes } from '../types';
const initialState = {
  fetchingPosts: false,
  posts: [],
  gettingIndividualPost: false,
  individualPost: {},
  gettingPostComments: false,
  postComments: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PostTypes.FETCHING_POSTS:
      return {
        ...state,
        fetchingPosts: true,
      };
    case PostTypes.FETCHED_POSTS:
      return {
        ...state,
        fetchingPosts: false,
        posts: action.payload,
      };
    case PostTypes.GETTING_INDIVIDUAL_POST:
      return {
        ...state,
        gettingIndividualPost: true,
      };
    case PostTypes.GOT_INDIVIDUAL_POST:
      return {
        ...state,
        gettingIndividualPost: false,
        individualPost: action.payload,
      };
    case PostTypes.GETTING_POST_COMMENTS:
      return {
        ...state,
        gettingPostComments: true,
      };
    case PostTypes.GOT_POST_COMMENTS:
      return {
        ...state,
        gettingPostComments: false,
        postComments: action.payload,
      };
    default:
      return state;
  }
}
export default reducer;

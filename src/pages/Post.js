import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  GetIndividualPost,
  GetPostComments,
} from "../redux/actions/PostActions";
function Post() {
  const params = useParams();
  const {
    gettingIndividualPost,
    individualPost,
    gettingPostComments,
    postComments,
  } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const { id } = params;
    dispatch(GetIndividualPost(id));
    dispatch(GetPostComments(id));
  }, [params, dispatch]);
  return (
    <div>
      {gettingIndividualPost ? (
        "loading posts"
      ) : (
        <div>
          <h1>{individualPost?.title}</h1>
          <p>{individualPost?.body}</p>
        </div>
      )}
      {gettingPostComments ? (
        "Comments are loading"
      ) : (
        <div>
          <h2>Comments</h2>
          {postComments.map((c) => (
            <div key={c.id}>
              <h3>{c.name}</h3>
              <h4>{c.email}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;

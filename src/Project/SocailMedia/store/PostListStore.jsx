import { createContext, useReducer } from "react";
const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},

  deletePost: () => {},
};
export const PostList = createContext(DEFAULT_CONTEXT);
let postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    console.log(userId, postTitle, postBody, reactions, tags);

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
        id: Date.now(),
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };
  return (
    <>
      <PostList.Provider
        value={{ postList, addPost, addInitialPosts, deletePost }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

export default PostListProvider;

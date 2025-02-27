import { useContext, useRef } from "react";
import {PostList} from "./store/PostListStore";

function CreatePost() {
  const {addPost}= useContext(PostList)
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value="";
    reactionsElement.current.value = "";
     tagsElement.current.value="";
    addPost(userId, postBody, postTitle, reactions,tags);
  }
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Id" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="id"
            placeholder="Enter Your User Id Here...."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="email"
            className="form-control"
            ref={postTitleElement}
            id="title"
            placeholder="Add Title ..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <input
            type="text"
            className="form-control"
            id="body"
            ref={postBodyElement}
            placeholder="Enter Post Content ..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Enter Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={reactionsElement}
            placeholder="Enter no of Reactions ..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            hashtags Here
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Enter Your Tags...."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}
export default CreatePost;

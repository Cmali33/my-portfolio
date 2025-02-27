import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "./store/PostListStore";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "38rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="positon-absolute top-0 start-100 translate-end badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <AiFillDelete></AiFillDelete>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag, i) => (
            <span key={i} className="badge text-bg-primary  hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {post.reactions} people
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;

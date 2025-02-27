import { PostList as PostListData } from "./store/PostListStore";
import Post from "./Post";
import Welcomemsg from "./Welcomemsg";
import { useContext,useEffect, useState} from "react";
import LoadingSpiner from "./LoadingSpiner";
function PostList() {
  const { PostList, addInitialPosts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);
  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts)
        setfetching(false);
      }
    );

  }, []);
  // postList = PostListData;
  return (
    <>
      /* { <LoadingSpiner />} */
      {PostList === 0 && <Welcomemsg />}
      {
        PostList.map((posts) => 
          <Post key={posts.id} post={posts}/>
        )
      
      } 
    </>
  );
}
export default PostList;

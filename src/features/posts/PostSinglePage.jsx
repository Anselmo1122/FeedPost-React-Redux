import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import UserPost from "../users/UserPost";
import { ReactionButtons } from "./ReactionButtons";
import TiemAgo from "./TiemAgo";

const PostSinglePage = () => {

  const { postId } = useParams()

  const singlePost = useSelector((state)=> state.posts.find((post) => post.id === postId ) )

  console.log(singlePost)

  if (!singlePost) {
    return(
      <article className="App-post__post">
        <h2>Post not found!</h2>
      </article>
    )
  }

  return (
    <article className="App-post__post">
      <div className="App-post__post-content">
        <h3>{singlePost.title}</h3>
        <p>{singlePost.content}</p>
      </div>
      <UserPost userId={singlePost.userId} />
      <Link 
        to={`/editpost/${singlePost.id}`} 
        className="post-button"
      >
        Edit Post
      </Link>
      <TiemAgo timestamp={singlePost.date} />
      <ReactionButtons post={singlePost} />
    </article>
  );
};

export default PostSinglePage;

import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const PostSinglePage = () => {

  const { postId } = useParams()

  const singlePost = useSelector((state)=> state.posts.find((post) => post.id === postId ) )

  if (!singlePost) {
    return(
      <article className="App-post__post">
        <h2>Post not found!</h2>
      </article>
    )
  }

  return (
    <article className="App-post__post">
      <h3>{singlePost.title}</h3>
      <p>{singlePost.content}</p>
      <Link to={`/editpost/${singlePost.id}`}>Edit post</Link>
    </article>
  );
};

export default PostSinglePage;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/postsList.css";

const PostsList = () => {

  const posts = useSelector((state)=> state.posts)

  const elementsPost = posts.map((post)=>{
    return(
      <article className="App-post__post" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <Link to={`/posts/${post.id}`} className="post-button">View post</Link>
      </article>
    )
  })
  
  return (
    <section className="App-posts">
      { elementsPost }
    </section>
  )
};

export default PostsList;

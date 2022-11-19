import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/postsList.css";
import UserPost from "../users/UserPost";
import TiemAgo from "./TiemAgo";

const PostsList = () => {

  const posts = useSelector((state)=> state.posts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const elementsPost = orderedPosts.map((post)=>{
    return(
      <article className="App-post__post" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <UserPost userId={post.userId} />
        <Link to={`/posts/${post.id}`} className="post-button">View post</Link>
        <TiemAgo timestamp={post.date} />
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


import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from './postsSlice';

const PostEditForm = () => {
  
  const { postId } = useParams()
  const navigate = useNavigate()

  const singlePost = useSelector((state)=> state.posts.find( (post) => post.id === postId ))

  const dispatch = useDispatch()

  const [title, setTitle] = useState(singlePost.title);
  const [content, setContent] = useState(singlePost.content);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  

  const onEditPost = () => {
    if (title && content){
      dispatch(updatePost({
        id: singlePost.id,
        title,
        content,
      }))
      setTitle('')
      setContent('')
      navigate("/")
    }
  }

  return (
    <form className="App-form">
      <div className="App-form__header">
        <h2>Edit this post</h2>
        <button type="button" onClick={ onEditPost }>
          Save post
        </button>
      </div>
      <div className="App-form__input">
        <label htmlFor="title">Title</label>
        <input 
          type="text"
          aria-label="Title for post" 
          name="title" 
          id="title"
          value={ title }
          onChange={ onTitleChange } 
        />
      </div>
      <div className="App-form__input">
        <label htmlFor="content">Content</label>
        <textarea 
          aria-label="Content for post"
          name="content"
          id="content"
          value={ content }
          onChange={ onContentChange }
          rows="5"
        />
      </div>
    </form>
  )
}

export default PostEditForm

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/postAddForm.css";
import { addPost } from "./postsSlice";

const PostAddForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user, setUser] = useState('0');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onUserChange = (e) => setUser(e.target.value);

  const users = useSelector((state) => state.users)

  const elementsUser = users.map(user=>{
    return(
      <option key={user.id} value={user.id}>{user.name}</option>
    )
  })

  const dispatch = useDispatch()

  const canSave = Boolean(title) && Boolean(content) && Boolean(user);

  const onSavePost = () => {
    if (title && content && user){
      dispatch(addPost(title, content, user))
      setTitle('')
      setContent('')
      setUser('0')
    }
  }
  return (
    <form className="App-form">
      <div className="App-form__header">
        <h2>Create a new post</h2>
        <button type="button" onClick={ onSavePost } disabled={!canSave}>
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
          onChange={ onTitleChange } 
        />
      </div>
      <div className="App-form__input">
        <label htmlFor="users">User</label>
        <select 
          name="users" 
          id="users" 
          onChange={ onUserChange }
        >
          <option value="0"></option>
          { elementsUser }
        </select>
      </div>
      <div className="App-form__input">
        <label htmlFor="content">Content</label>
        <textarea 
          aria-label="Content for post"
          name="content"
          id="content"
          onChange={ onContentChange }
          rows="5"
        />
      </div>
    </form>
  )
};

export default PostAddForm;

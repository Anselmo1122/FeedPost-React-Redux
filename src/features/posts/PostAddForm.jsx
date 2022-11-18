import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../styles/postAddForm.css";
import { addPost } from "./postsSlice";

const PostAddForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const dispatch = useDispatch()

  const onSavePost = () => {
    if (title && content){
      dispatch(addPost({
        id: nanoid(),
        title,
        content
      }))
      setTitle('')
      setContent('')
    }
  }
  return (
    <form className="App-form">
      <div className="App-form__header">
        <h2>Create a new post</h2>
        <button type="button" onClick={ onSavePost }>
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

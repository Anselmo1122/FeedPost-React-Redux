import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './app/NavBar'
import PostAddForm from './features/posts/PostAddForm';
import PostEditForm from './features/posts/PostEditForm';
import PostSinglePage from './features/posts/PostSinglePage';
import PostList from './features/posts/PostsList';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={
              <React.Fragment>
                  <header className='App-header'>
                    <h2 className="App-title">Feed Post App</h2>
                    <PostAddForm />
                  </header>
                <PostList />
              </React.Fragment>
            } 
          />
          <Route path='/posts/:postId' element={<PostSinglePage />} />
          <Route path='/editpost/:postId' element={<PostEditForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

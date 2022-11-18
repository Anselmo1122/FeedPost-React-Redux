import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PostAddForm from './features/posts/PostAddForm';
import PostList from './features/posts/PostsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="App">
            <header className='App-header'>
              <h2 className="App-title">Feed Post App</h2>
              <PostAddForm />
            </header>
            <PostList />
          </div>} 
        />
      </Routes>
    </Router>
    
  );
}

export default App;

import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Paginate from './components/paginate/Paginate';

// const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5&_start=0';
const URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className='App'>
      <h1>Components Practice</h1>
      {posts.length ? <Paginate items={posts} /> : <p>No data</p>}
    </div>
  );
}

export default App;

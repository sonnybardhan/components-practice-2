import './infinite-scroll.css';

import { useState, useCallback, useEffect } from 'react';
import Post from './Post';

const URL = `https://jsonplaceholder.typicode.com/posts?_limit=10&_start=`;

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [lastPostLoaded, setLastPostLoaded] = useState(0);
  const [loadPosts, setLoadPosts] = useState(true);

  const fetchPosts = useCallback(async () => {
    const res = await fetch(URL + lastPostLoaded);
    const postsData = await res.json();
    setPosts((previousPosts) =>
      previousPosts ? [...previousPosts, ...postsData] : postsData
    );
  }, [lastPostLoaded]);

  useEffect(() => {
    if (loadPosts) {
      fetchPosts();
      setLoadPosts(false);
    }
  }, [loadPosts]);

  useEffect(() => {
    if (posts.length) {
      const lastId = posts[posts.length - 1]['id'];
      setLastPostLoaded(lastId);
    }
  }, [posts]);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      if (docHeight + scrollTop >= scrollHeight) {
        setLoadPosts(true);
      }
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const postsToRender = posts.map((post) => (
    <Post postContent={post} key={post.id} />
  ));

  return (
    <div className='infinity-scroll-container'>
      <h2>Infinite Scroll</h2>
      {postsToRender}
    </div>
  );
};

export default InfiniteScroll;

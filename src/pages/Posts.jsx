import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { mockPosts } from '../data/mockData';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Posts</h2>
      <button 
        onClick={handleLoginClick}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mb-6"
      >
        Login/Signup
      </button>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
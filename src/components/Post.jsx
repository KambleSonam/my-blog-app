import React from 'react';

const Post = ({ post }) => (
  <article className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
    <p className="text-gray-600 mb-4">{post.excerpt}</p>
    <div className="flex justify-between items-center text-sm text-gray-500">
      <span>By {post.author}</span>
      <time>{new Date(post.date).toLocaleDateString()}</time>
    </div>
  </article>
);

export default Post;
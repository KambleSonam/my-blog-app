import React from 'react';

const Header = () => (
  <header className="bg-blue-600 text-white shadow-lg">
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold">React SSR Blog</h1>
      <p className="text-blue-100 mt-2">Server-Side Rendered with React</p>
    </div>
  </header>
);

export default Header;
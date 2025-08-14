import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavigationWithRouter from './components/NavigationWithRouter';
import Posts from './pages/Posts';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <NavigationWithRouter />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 React SSR Blog. Built with React and Server-Side Rendering.</p>
            <p className="text-gray-400 mt-2 text-sm">
              This demo shows how SSR provides immediate content visibility and better performance.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

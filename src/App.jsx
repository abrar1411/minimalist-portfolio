import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blogs from './pages/Blogs';

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-white/70 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 font-mono text-sm">
          {/* Logo */}
          <div className="text-3xl font-semibold text-gray-800">
            AA
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-gray-600">
            <Link to="/" className="hover:underline underline-offset-4 transition duration-200">
              Home
            </Link>
            <Link to="/projects" className="hover:underline underline-offset-4 transition duration-200">
              Projects
            </Link>
            <Link to="/resume" className="hover:underline underline-offset-4 transition duration-200">
              Resume
            </Link>
            <Link to="/blogs" className="hover:underline underline-offset-4 transition duration-200">
              Blogs
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

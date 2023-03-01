import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './pages/common/navbar';
import Footer from './pages/common/footer';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Docs from './pages/Docs';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

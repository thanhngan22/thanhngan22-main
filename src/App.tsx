import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/common/footer';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Docs from './pages/Docs';
import Writing from './pages/Writing';
import Study from './pages/Study';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/study" element={<Study />} />
          <Route path="/" element={<Home />} />          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

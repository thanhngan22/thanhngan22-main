import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Docs from './pages/Docs';
import Writing from './pages/Writing';
import Study from './pages/Study';
import PageNotFound from './pages/404Page';

// 1. create load bar same github
// 2. move in a file for routes

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/study" element={<Study />} />
          <Route path="/" element={<Home />} />      
          <Route path="*" element={<PageNotFound />} />    
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

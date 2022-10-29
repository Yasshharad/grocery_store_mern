
import React from 'react';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import { Route, Routes } from "react-router-dom";
import MainLog from './components/Authentication/mainLog';
import './App.css';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/feature" element={<Features />} />
        <Route path="products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<MainLog />} />
        <Route path="/loginFarmer" element={<MainLog />} />
      </Routes>
    </div>
  );
}

export default App;

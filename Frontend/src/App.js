
import React, { useContext } from 'react';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import { Route, Routes } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// import { GlobalState } from './GlobalState';
// import UserAPI from './api/userAPI';
import './App.css';
import LoginFarmer from './components/authFarmer/LoginFarmer';
import RegisterFarmer from './components/authFarmer/RegisterFarmer';

function App() {
  // const state = useContext(GlobalState);
  // const [isLogged] = state.userAPI.isLogged;
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/feature" element={<Features />} />
        <Route path="products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginFarmer" element={<LoginFarmer />} />
        <Route path="/registerFarmer" element={<RegisterFarmer />} />
      </Routes>
    </div>
  );
}

export default App;

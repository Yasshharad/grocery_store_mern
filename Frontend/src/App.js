
import React from 'react';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import { Route, Routes, Router } from "react-router-dom";
import MainLog from './components/Authentication/mainLog';
import LoginScreen from './components/FarmerAuthentication/FarmerLogin/farmerLogin';
import './App.css';
import RegisterScreen from './components/FarmerAuthentication/FarmerSignUp/farmerSignup';
import SearchForm from './components/Header/SearchForm/SearchForm';
import ProfileScreen from './components/FarmerAuthentication/ProfileScreen/ProfileScreen';


function App() {
  return (
    <div className="app">
      <SearchForm setSearch={(s) => setSearch(s)} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/feature" element={<Features />} />
        <Route path="products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/loginCustomer" element={<MainLog />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
}

export default App;

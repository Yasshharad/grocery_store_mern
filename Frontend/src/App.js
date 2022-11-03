
import React, { useContext } from 'react';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import { Route, Routes } from "react-router-dom";
import SearchForm from './components/Header/SearchForm/SearchForm';
import Login from './components/mainpages/auth/Login';
import Register from './components/mainpages/auth/Register';
// import { GlobalState } from './GlobalState';
// import UserAPI from './api/userAPI';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import Header from './components/Header/Header';
import Pages from './components/mainpages/Pages';
import './App.css';

function App() {
  // const state = useContext(GlobalState);
  // const [isLogged] = state.userAPI.isLogged;
  return (
    <DataProvider>
      <div className="app">
        <SearchForm setSearch={(s) => setSearch(s)} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/feature" element={<Features />} />
          <Route path="products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Pages" element={<Pages />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;

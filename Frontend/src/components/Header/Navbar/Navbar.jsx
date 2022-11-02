// Navbar
import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useContext } from 'react';


export default function Navbar() {
  const logoutUser = async () => {
    await axios.get('/user/logout')

    localStorage.removeItem('firstLogin')

    window.location.href = "/";
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/feature">Features</Link>
        </li>
        <li>
          <Link to="/products" >Products</Link>
        </li>
        <li>
          <Link to="/reviews" >Reviews</Link>
        </li>
        <li>
          <Link to="/blogs" >Blogs</Link>
        </li>
        <li><Link to="/login">Login(Customer)</Link></li>
        <li><Link to="/loginFarmer">Login(farmer)</Link></li>
      </ul>
    </nav >
  );
}

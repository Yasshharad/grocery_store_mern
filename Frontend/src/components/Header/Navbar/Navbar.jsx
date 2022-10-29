// Navbar
import { BrowserRouter, Link } from 'react-router-dom';
import './Navbar.css';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar() {
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
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link to="/login" >Login(Customer)</Link>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <Link to="/loginFarmer" >Login(Farmer)</Link>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
}

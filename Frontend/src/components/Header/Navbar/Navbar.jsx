// Navbar
import { BrowserRouter, Link } from 'react-router-dom';
import './Navbar.css';
import React, { useEffect } from 'react';
import {
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { logout } from "../../FarmerAuthentication/actions/userAction";
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const farmerLogin = useSelector((state) => state.farmerLogin);
  const farmerInfo = farmerLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => { }, [userInfo]);
  useEffect(() => { }, [farmerInfo]);
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
          <Nav>
            {userInfo ? (
              <>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                ><img
                    alt=""
                    src={`${userInfo.pic}`}
                    width="25"
                    height="25"
                    style={{ marginRight: 10 }}
                  />
                  <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/loginCustomer">Login(Customer)</Nav.Link>
            )}
          </Nav>
        </li>
        <li>
          <Nav>
            {farmerInfo ? (
              <>
                <NavDropdown
                  title={`${farmerInfo.name}`}
                  id="collasible-nav-dropdown"
                >  <img
                    alt=""
                    src={`${farmerInfo.pic}`}
                    width="25"
                    height="25"
                    style={{ marginRight: 10 }}
                  />
                  <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/login">Login(Farmer)</Nav.Link>
            )}
          </Nav>
        </li>
      </ul>
    </nav>
  );
}

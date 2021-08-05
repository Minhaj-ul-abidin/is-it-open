import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.authentication.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-Brand" to="/Home">
        IS IT OPEN
      </Link>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collections">
              Collections
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">
              {user ? "Logout" : "Login"}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Register">
              Register
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };

import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Icons/hp-logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="sadh" height="40"></img>
      </div>
      <div className="navbar">
        <ul>
          <Link className="list-a" to="/">
            {" "}
            CLASSBASED
          </Link>
        </ul>
        <ul>
          <Link className="list-a" to="/Functionbased">
            {" "}
            FUNCTIONBASED
          </Link>
        </ul>
        <ul>
          <Link className="list-a" to="/WithRedux">
            {" "}
            WITHREDUX
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

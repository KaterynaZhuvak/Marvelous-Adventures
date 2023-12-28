import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Styled";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <header>
        <div className="container">
          <div className="nav-wrapper">
            <img src={logo} alt="logo" />
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/search">Search</NavLink>
            </nav>
          </div>
        </div>
      </header>
    </StyledHeader>
  );
};

export default Header;

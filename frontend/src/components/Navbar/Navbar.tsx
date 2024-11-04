import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES } from "src/constants";
import greenLogo from "src/static/green-logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact className="logo" to={ROUTES.HOME}>
        <img className="logo-img" src={greenLogo} alt={"Logo for S.A.M."} />
        <h1 className="title">Spotify Accessor for Metadata</h1>
      </NavLink>
      <ul className="links">
        <li>
          <NavLink exact to={ROUTES.HOME}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.SEARCH}>SEARCH</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.COMPARE}>COMPARE PLAYLISTS</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.TOOLS}>TOOLS</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

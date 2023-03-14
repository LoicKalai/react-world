import React from "react";
import { NavLink } from "react-router-dom"; /*NavLink est le <a href> en React, pour redirection */

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>

        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";

import "../../reset.css";
import "./NavBar.css";

import NavDrawer from "./NavDrawer";

export default function NavBar() {
  return (
    <div id="wrapper">
      <div id="navLinks">
        <Link to="/">Home</Link>
        <Link to="/weddings">Weddings</Link>
        <Link to="/parties">Parties</Link>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pan_Am_Logo.svg/1200px-Pan_Am_Logo.svg.png"
            alt=""
          />
        </Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div id="drawerWrapper">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pan_Am_Logo.svg/1200px-Pan_Am_Logo.svg.png"
            alt=""
          />
        </Link>
        <NavDrawer />
      </div>
    </div>
  );
}

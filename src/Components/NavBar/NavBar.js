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
        <Link to="/portraits">Portraits</Link>
        <Link to="/family">Family</Link>
        <Link to="/couples">Couples</Link>
        <Link to="/weddings">Weddings</Link>
        <Link to="/">
          <img
            src={require('../../Images/LandoLaneLogo.svg')}
            alt=""
          />
        </Link>
        <Link to="/music">Music</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/products">Product Photos</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div id="drawerWrapper">
        <Link to="/">
          <img
            src={require('../../Images/LandoLaneLogo.svg')}
            alt=""
          />
        </Link>
        <NavDrawer />
      </div>
    </div>
  );
}

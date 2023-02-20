import React, { useState, useEffect } from "react";
import "../styles/Navbar.scss";
import DropDown from "./DropDown";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="/" aria-label="Home">
            Home
          </a>
        </li>
        <li>
          <a href="/" aria-label="About">
            About
          </a>
        </li>
        <li>
          <DropDown text="Dropdown-1" />
        </li>
        <li>
          <DropDown text="Dropdown-2" />
        </li>
        <li>
          <DropDown text="Dropdown-3" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

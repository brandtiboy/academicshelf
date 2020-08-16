import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import logo from "./logo.svg";

import "./navbar.style.scss";

const NavBar = () => {
  return (
    <nav className='nav-wrapper'>
      <Link to='/courses' className='brand-logo'>
        <img src={logo} alt='Brand Logo' />
      </Link>
      <ul>
        <li>
          <NavLink to='/courses' className='fancy-link'>
            <FontAwesomeIcon icon={faListUl} className='icon' /> Kurser
          </NavLink>
        </li>
        <li>
          <NavLink to='/discover' className='fancy-link'>
            <FontAwesomeIcon icon={faSearch} className='icon' /> Find bøger
          </NavLink>
        </li>
      </ul>
      <ul className='bottom-links'>
        {/*
        <li>
          <NavLink to='/'>Person</NavLink>
        </li>
        */}
        <li className='log-out'>
          <NavLink to='/' className='log-out-button'>
            <FontAwesomeIcon icon={faSignOutAlt} className='icon' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

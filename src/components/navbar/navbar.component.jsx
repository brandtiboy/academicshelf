import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import logo from "./logo.svg";

import "./navbar.style.scss";
import { auth } from "../../firebase/firebase.utils";

const NavBar = ({ currentUser }) => {
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
        {!currentUser ? (
          <li className='log-out'>
            <Link
              to='/'
              className='log-out-button'
              onClick={() => auth.signOut()}
            >
              <FontAwesomeIcon icon={faSignOutAlt} className='icon' />
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default NavBar;

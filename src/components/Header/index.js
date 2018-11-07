/**
 * NPM import
 */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
/**
 * Local import
 */
// Components

// Styles
import './header.scss';

/**
 * Code
 */
const Header = () => (
  <div id="header">
    <a href="https://twitter.com/scamsc2">
      <FaTwitter className="twitter-icon" />
    </a>
    <a href="https://www.facebook.com/gabrielmouracanto">
      <FaFacebookF className="facebook-icon" />
    </a>
    <Link
      to="/"
    >
      <h1 className="title">Gabriel De Moura</h1>
    </Link>
    <a href="https://www.linkedin.com/in/gabriel-de-moura/">
      <FaLinkedin className="linkedin-icon" />
    </a>
    <a href="https://github.com/GabrielDeM">
      <FaGithub className="github-icon" />
    </a>
  </div>
);

/**
 * Export
 */
export default Header;

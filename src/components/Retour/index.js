/**
 * NPM import
 */
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Local import
 */
// React Icons
import { FaChevronLeft } from 'react-icons/fa';

// Components

// Styles
import './retour.scss';

/**
 * Code
 */
const Retour = () => (
  <div id="retour">
    <Link
      to="/"
      className="retour-text"
    >
      <FaChevronLeft className="chevron-icon" />Home
    </Link>
  </div>
);

/**
 * Export
 */
export default Retour;

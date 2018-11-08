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
    >
      <FaChevronLeft className="chevron-icon" />
      <span className="retour-text">Home</span>
    </Link>
  </div>
);

/**
 * Export
 */
export default Retour;

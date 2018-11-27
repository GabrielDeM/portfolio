/**
 * NPM import
 */
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Local import
 */
// Components
// Styles
import './nav.scss';
// Data
import navData from 'src/data/nav';
/**
 * Code
 */
const Nav = () => (
  <div className="nav-div">
    {console.log(navData)}
    {
      navData.map(data => (
        <Link
          key={data.id}
          to={data.route}
          className={`nav-link nav-link-${data.id}`}
          data-inf={data.name}
        >
          <img src={data.img} alt="" />
        </Link>
      ))
    }
  </div>
);

/**
 * Export
 */
export default Nav;

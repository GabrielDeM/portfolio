/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Retour from 'src/components/Retour';
// Styles
import './notfound.scss';

/**
 * Code
 */
const NotFound = () => (
  <div id="notfound">
    <Retour />
    <div className="flex-div">
      <div className="error-text">ERROR 404</div>
    </div>
  </div>
);

/**
 * Export
 */
export default NotFound;

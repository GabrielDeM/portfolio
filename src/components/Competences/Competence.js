/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Components
// Styles
import './competences.scss';

/**
 * Code
 */
const Competence = ({ name, niv }) => (
  <div id="competence">
    <p className="competence-name">{name}</p>
    <p>{niv}</p>
    {/* TODO: boucle for pour le niv des competences */}
  </div>
);

Competence.propTypes = {
  name: PropTypes.string.isRequired,
  niv: PropTypes.number.isRequired,
};

/**
 * Export
 */
export default Competence;

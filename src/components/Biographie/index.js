/**
 * NPM import
 */
import React from 'react';
import Parser from 'html-react-parser';
import {
  FaCode,
  FaReact,
  FaPlaneDeparture,
  FaSun,
} from 'react-icons/fa';
/**
 * Local import
 */
// data
import textData from 'src/data/biographie';
// Components
import Retour from 'src/components/Retour';
// Styles
import './biographie.scss';

/**
 * Code
 */
const Biographie = () => (
  <div id="biographie">
    <Retour />
    <p className="bio-p">
      <FaCode className=" bio-icon code-icon" />
      {/* {textData.code} */}
      {Parser(textData.code)}
    </p>
    <p className="bio-p">
      <FaReact className=" bio-icon react-icon" />
      {Parser(textData.react)}
    </p>
    <p className="bio-p asd">
      <FaPlaneDeparture className=" bio-icon avion-icon" />
      {Parser(textData.voyage)}
      <FaSun className="bio-icon soleil-icon" />
    </p>
  </div>
);

/**
 * Export
 */
export default Biographie;

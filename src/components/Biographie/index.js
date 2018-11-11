/**
 * NPM import
 */
import React from 'react';
import Parser from 'html-react-parser';
import {
  FaCode,
  FaReact,
  FaPlaneDeparture,
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
    <div className="div-img">
      <img src="src/data/images/Gabriel-droit.JPG" alt="Gabriel" className="img-biographie" />
    </div>
    <div className="bio-img">
      <ul>
        <li><span className="span-bio_img">Age:</span> 19 ans</li>
        <li><span className="span-bio_img">Ville:</span> Limoges</li>
        <li><span className="span-bio_img">Tel:</span> 06.21.06.63.25</li>
        <li><span className="span-bio_img">Email:</span> gabrielmouracanto@hotmail.com</li>
      </ul>
    </div>
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
    </p>
  </div>
);

/**
 * Export
 */
export default Biographie;

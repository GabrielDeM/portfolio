/**
 * NPM import
 */
import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
} from 'react-icons/fa';
/**
 * Local import
 */
// Components
import Retour from 'src/components/Retour';
import Competence from 'src/components/Competences/Competence';
// Datas
import competencesData from 'src/data/competences';
// Styles
import './competences.scss';

/**
 * Code
 */
const Competences = () => (
  <div id="competences">
    <Retour />
    <div className="competences-div">
      <div className="html_css-div">
        <FaHtml5 className="competences-icons html-icon" />
        <FaCss3Alt className="competences-icons css-icon" />
        {
          competencesData.htmlcss.map(data => (
            <Competence key={data.id} {...data} />
          ))
        }
      </div>
    </div>
    <div className="competences-div">
      <FaJsSquare className="competences-icons js-icon" />
      {/* <Competence competences={competencesData.js} /> */}
    </div>
    <div className="competences-div">
      <FaPhp className="competences-icons php-icon" />
      {/* <Competence competences={competencesData.php} /> */}
    </div>
  </div>
);

/**
 * Export
 */
export default Competences;

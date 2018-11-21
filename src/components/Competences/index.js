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
    <div id="competences-align-center">
      <div className="competences-div">
        <FaJsSquare className="competences-icons js-icon" />
        <p className="competence-resume">{competencesData.jsResume}</p>
        {
          competencesData.js.map(data => (
            <Competence key={data.id} {...data} />
          ))
        }
      </div>
      <span className="division" />
      <div className="competences-div">
        <div className="html_css-div">
          <FaHtml5 className="competences-icons html-icon" />
          <FaCss3Alt className="competences-icons css-icon" />
          <p className="competence-resume">{competencesData.htmlcssResume}</p>
          {
            competencesData.htmlcss.map(data => (
              <Competence key={data.id} {...data} />
            ))
          }
        </div>
      </div>
      <span className="division" />
      <div className="competences-div">
        <FaPhp className="competences-icons php-icon" />
        <p className="competence-resume">{competencesData.phpResume}</p>
        {
          competencesData.php.map(data => (
            <Competence key={data.id} {...data} />
          ))
        }
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default Competences;

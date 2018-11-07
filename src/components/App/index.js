/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/**
 * Local import
 */
// Components
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';
import Biographie from 'src/components/Biographie';
import Competences from 'src/components/Competences';
import NotFound from 'src/components/NotFound';
// Styles
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <Switch>
      {/* Homepage */}
      <Route exact path="/" component={Nav} />
      {/* Bio */}
      <Route exact path="/bio" component={Biographie} />
      {/* Compétences */}
      <Route exact path="/competences" component={Competences} />
      {/* Page not found */}
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;

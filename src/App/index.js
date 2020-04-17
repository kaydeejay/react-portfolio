import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Spacer from '../components/Spacer';
import Footer from '../components/Footer';

import AboutMe from '../components/pages/AboutMe';
import Contact from '../components/pages/Contact';
import Portfolio from '../components/pages/Portfolio';
import NotFound from '../components/pages/NotFound';

import './style.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Spacer />
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

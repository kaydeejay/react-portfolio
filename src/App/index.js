import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Spacer from '../components/Spacer';
import Footer from '../components/Footer';

import AboutMe from '../components/pages/AboutMe';
import Contact from '../components/pages/Contact';
import Portfolio from '../components/pages/Portfolio';

import './style.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Spacer />
        <Route exact path='/' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Switch>
          <Route exact path='/github' component={() => window.location = 'https://github.com/kaydeejay'} />
          <Route exact path='/linkedin' component={() => window.location = 'https://github.com/kaydeejay'} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

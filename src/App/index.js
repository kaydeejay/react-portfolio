import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
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
        <Route exact path='/' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

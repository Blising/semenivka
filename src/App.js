import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import Home from '../src/pages/Home';
import Info from '../src/pages/Info';
import Map from '../src/pages/Map';
import Footer from './components/Footer';

const Header = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">Домашня сторінка</NavLink>
      <NavLink to="/info" className="nav-link">Інформація</NavLink>
      <NavLink to="/map" className="nav-link">Мапа</NavLink>
    </nav>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/info" component={Info} />
            <Route path="/map" component={Map} />
          </Switch>
        </div>
      </Router>

      <Footer/>
    </>
  );
};

export default App;

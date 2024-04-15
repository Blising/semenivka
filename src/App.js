import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import Home from '../src/pages/Home';
import Info from '../src/pages/Info';
import Map from '../src/pages/Map';
import Users from './pages/Users';



const Header = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">Домашня сторінка</NavLink>
      <NavLink to="/info" className="nav-link">Школа</NavLink>

      <NavLink to="/map" className="nav-link">Карта</NavLink>
      <NavLink to="/users" className="nav-link">Дошка</NavLink>
      
      <a className='nav-link' href="https://www.wikiwand.com/uk/%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD%D1%96%D0%B2%D0%BA%D0%B0_(%D0%9A%D0%B0%D1%85%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD)" target="_blank">Інфо</a>

     
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
            <Route path="/users" component={Users} />
          </Switch>
        </div>
      </Router>
      

    </>
  );
};

export default App;

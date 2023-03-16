import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Connexion from './components/pages/Connexion';
import Panier from './components/pages/Panier';
import Paramètres from './components/pages/Paramètres';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Connexion' component={Connexion} />
          <Route path='/Panier' component={Panier} />
          <Route path='/Paramètres' component={Paramètres} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

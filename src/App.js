import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

import { Switch, Route } from 'react-router-dom';

import React from 'react'


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  )
}

export default App;


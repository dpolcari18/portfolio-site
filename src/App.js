import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './containers/Home'

function App() {
  return (
    <Router>
      <Route path='/resume' component={Home} />
      <Route path='/contact' component={Home} />
      <Route path='/blog' component={Home} />
      <Route path='/portfolio' component={Home} />
      <Route path='/about' component={Home} />
      <Route path='/' component={Home} />
    </Router>
  );
}

export default App;

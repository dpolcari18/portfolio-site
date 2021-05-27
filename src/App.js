import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

// Containers
import Home from './containers/Home'
import NavBar from './containers/NavBar'

function App() {

  return (
       <Router>
              <NavBar />
              <Route path='/resume' 
                     component={Home} 
                     onEnter={() => document.getElementById('resume_id').scrollIntoView()}
              />
              <Route path='/contact' 
                     component={Home} 
                     onEnter={() => document.getElementById('contact_id').scrollIntoView()}
              />
              <Route path='/blog' 
                     component={Home} 
                     onEnter={() => document.getElementById('blog_id').scrollIntoView()}
              />
              <Route path='/portfolio' 
                     component={Home} 
                     onEnter={() => document.getElementById('portfolio_id').scrollIntoView()}
              />
              <Route path='/about' 
                     component={Home} 
                     onEnter={() => document.getElementById('about_id').scrollIntoView()}
              />
              <Route exact path='/' 
                     component={Home} 
                     onEnter={() => document.getElementById('home_id').scrollIntoView()}
              />
       </Router>     
  );
}

export default App;

import React from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

// Containers
import Home from './containers/Home'
import NavBar from './containers/NavBar'

function App() {  

  return (
       <>
              <NavBar />
              <Home />
       </>
  )
}

export default App;

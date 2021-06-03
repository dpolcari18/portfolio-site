import React from 'react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

// Containers
import Home from './containers/Home'
import NavBar from './containers/NavBar'

// Components
import Footer from './components/Footer'

function App() {  

  return (
       <>
              <NavBar />
              <Home />
              <Footer />
       </>
  )
}

export default App;

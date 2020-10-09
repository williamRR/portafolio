import React from 'react'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import MiddleLayout from './components/MiddleLayout'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container p-4">
      <Navigation />
      <MiddleLayout />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container p-4">
        <Route path='/form/'>
          {/* <Form /> */}
        </Route>
        <Route exact path='/'>
          {/* <TravelList /> */}
        </Route>
      </div>
    </BrowserRouter >

  )
}

export default App

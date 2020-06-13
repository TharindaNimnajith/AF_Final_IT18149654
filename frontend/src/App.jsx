import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ManageUserComponent from './pages/manage-user-component/manage-user-component'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Route path='/' component={ManageUserComponent} exact/>
      </Router>
    </div>
  )
}

export default App

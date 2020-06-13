import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ManageTourManagerComponent from './pages/manage-tour-manager-component/manage-tour-manager-component'
import ManageTourComponent from './pages/manage-tour-component/manage-tour-component'
import LoginRegisterComponent from './pages/login-register-component/login-register-component'
import './App.css'
import Footer from "./components/footer-component/footer-component";

function App() {
  return (
    <div>
      <Router>
        <Route path='/managers' component={ManageTourManagerComponent} exact/>
        <Route path='/tours' component={ManageTourComponent} exact/>
        <Route path='/login' component={LoginRegisterComponent} exact/>
      </Router>
      <Footer/>
    </div>
  )
}

export default App

import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ManageTourManagerComponent from './pages/manage-tour-manager-component/manage-tour-manager-component'
import ManageTourComponent from './pages/manage-tour-component/manage-tour-component'
import LoginRegisterComponent from './pages/login-register-component/login-register-component'
import Footer from './components/footer-component/footer-component'
import HomeComponent from './pages/home-component/home-component'
import TourPackagesComponent from './pages/tour-packages-component/tour-packages-component'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/' component={HomeComponent} exact/>
          <Route path='/managers' component={ManageTourManagerComponent} exact/>
          <Route path='/tours' component={ManageTourComponent} exact/>
          <Route path='/login' component={LoginRegisterComponent} exact/>
          <Route path='/packages' component={TourPackagesComponent} exact/>
        </Router>
        <Footer/>
      </div>
    )
  }
}

export default App

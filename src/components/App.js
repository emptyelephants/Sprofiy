//modules
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import NavBar from './NavBar.js'
import './styles/navBar.css';
import './styles/App.css'
//components
import Dashboard from './Dashboard';
import LoginPage from './LoginPage.js';
import LandingPage from './LandingPage';
import PublicDash from './PublicDash'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/recipes" component={PublicDash} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading:state.loading
})

export default withRouter(connect(mapStateToProps)(App));

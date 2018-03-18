//modules
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

//components
import Dashboard from './Dashboard';
import LoginPage from './LoginPage.js';
import LandingPage from './LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading:state.loading
})

export default withRouter(connect(mapStateToProps)(App));

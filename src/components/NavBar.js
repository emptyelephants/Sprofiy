import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import NavBarControls from './NavBarControls.js';
import './styles/navBar.css'
import {handleNewRecipeModal} from '../actions/controls'
import {clearAuth} from '../actions/auth'
class NavBar extends React.Component {
  render(){
    let handleLogButton;
    if(this.props.loggedIn){
      handleLogButton = (
        <button className="nav-button"
          onClick={() => this.props.dispatch(clearAuth())}><Link to="/">Sign Out</Link></button>
        );
    }
    else{
      handleLogButton = (
        <button className="nav-button"><Link to="/login">Sign In</Link></button>
        );
    }
    return(
      <div className="nav-bar">
        <div className="nav-bar-upper">
            <h1 className="sproify-logo">Sproify</h1>
            {handleLogButton}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  loggedIn :state.auth.currentUser !== null
})

export default connect(mapStateToProps)(NavBar);

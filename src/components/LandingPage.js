import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import RegistrationForm from './forms/RegistrationForm.js';
import TagLineCard from './TagLineCard';
import './styles/landingPage.css'
import LandingFooter from './LandingFooter';

class LandingPage extends React.Component{
  render(){
    if(this.props.loggedIn){
      return <Redirect to='/dashboard' />
    }
    return (
      <div className="landing-page row">
        <div className="nav-bar">
          <h1>Sproify</h1>
        </div>
        <div className="jumboTron-container">
          <div className="jumboTron-image" aria-label="Image of espresso shot pulling">
          </div>
          <div className="user-registration">
            <h2>All your espresso recipes in one place</h2>
            <RegistrationForm />
            <p>Already have an account? <Link to="/login"> Login </Link></p>
          </div>
        </div>
        <div className="tag-line-container">
          <TagLineCard className="create" title={"Create"}
            body={"Be as detailed as you want with your recipes"}
          />
          <TagLineCard className="organize" title={"Organize"}
            body={"Organize your recipes into categories and mark your favorites"}
          />
          <TagLineCard className="enjoy" title={"Enjoy"}
            body={"Take the guess work out of your mornings and stick to the best part of coffee"}
          />
        </div>
        <LandingFooter />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !==null
})

export default connect(mapStateToProps)(LandingPage);

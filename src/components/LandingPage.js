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

      <div className="landing-page">
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
          <TagLineCard className="organize" title={"Share"}
            body={"Send recipes to other coffee lovers"}
          />
          <TagLineCard className="enjoy" title={"Enjoy"}
            body={"Take the guess work out of your mornings and stick to the best part of coffee"}
          />
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !==null
})

export default connect(mapStateToProps)(LandingPage);

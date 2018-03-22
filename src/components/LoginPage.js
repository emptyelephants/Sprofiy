import React from 'react'
import {connect} from 'react-redux'
import LoginForm from './forms/LoginForm.js'
import{Link, Redirect} from 'react-router-dom'
import './styles/loginPage.css'
export function LoginPage(props){
  if(props.loggedIn){
    return <Redirect to="/dashboard"/>
  }
  return(

    <div className="login-page">

      <div className="login-page-container">
        <h2>Welcome Back</h2>
        <LoginForm loginError={props.error} />
        <p>No account? <Link to="/">Register.</Link></p>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  error: state.auth.error !== null
})

export default connect(mapStateToProps)(LoginPage);

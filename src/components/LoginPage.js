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
      <div className="nav-bar">
        <h1>Sproify</h1>
      </div>
      <div className="login-page-container">
        <h2>Welcome Back</h2>
        <LoginForm />
        <p>No account? <Link to="/">Register.</Link></p>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LoginPage);

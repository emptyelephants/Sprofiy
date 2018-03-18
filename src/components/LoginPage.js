import React from 'react'
import {connect} from 'react-redux'
import LoginForm from './forms/LoginForm.js'
import{Link, Redirect} from 'react-router-dom'

export function LoginPage(props){
  if(props.loggedIn){
    return <Redirect to="/dashboard"/>
  }
  return(
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm />
      <p>No account? <Link to="/">Register</Link></p>
    </div>
  )
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LoginPage);

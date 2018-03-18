import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './forms/RegistrationForm.js'
export default function LandingPage(props){

  return(
    <div className="landing-page">
      <div className="jumboTron">
      <h1>Sproify</h1>
      <h2>Register</h2>
      <RegistrationForm />
      <Link to="/login"> Login </Link>
    </div>
    </div>

  )
}

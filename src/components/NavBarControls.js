import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBarControls(){

  return(
    <div className="nav-bar-controls">
      {/* <Link to="/recipes">All Recipes</Link> */}
      <Link to="/dashboard">My Recipes</Link>
    </div>
  )

}

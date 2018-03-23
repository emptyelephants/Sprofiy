import React from 'react'
import {connect} from 'react-redux'
import {handleNewRecipeModal} from '../actions/controls'
class DashboardControls extends React.Component{
  render(){
    return(
        <div className="dashboard-controls">
          <button onClick={() => this.props.dispatch(handleNewRecipeModal())}>New Recipe</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  controls:state.controls
})


export default connect(mapStateToProps)(DashboardControls)

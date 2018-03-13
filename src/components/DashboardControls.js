import React from 'react'
import {connect} from 'react-redux'
import {handleNewRecipeForm} from '../actions/controls'
class DashboardControls extends React.Component{
  render(){
    console.log('from controls',this.props);
    return(
        <div className="dashboard-controls">
          <button onClick={() => this.props.dispatch(handleNewRecipeForm())}>New Recipe</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  controls:state.controls
})


export default connect(mapStateToProps)(DashboardControls)

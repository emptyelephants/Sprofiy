import React from 'react';
import {connect} from 'react-redux';
import{Redirect} from 'react-router-dom'

//components and styles
import RecipeSpread from './RecipeSpread';
import DashboardControls from './DashboardControls'
import './styles/dashboard.css'
import NewRecipeModal from './NewRecipeModal.js'

//actions
import {fetchAllRecipeData} from '../actions/dashboard'

class PublicDash extends React.Component{

  componentDidMount(){
      this.props.dispatch(fetchAllRecipeData());
  }
  //handle negative values, hide prev on start of dashboard and vice versa for the next

  render(){
    //LOGS OUT USER
    // if(!this.props.loggedIn){
    //     return <Redirect to='/'/>
    // }

    console.log('hellooo');
    const addRecipeForm = this.props.controls.isCreatingRecipe ? <NewRecipeModal/>:undefined;
    const viewRecipe = this.props.controls.isViewingRecipe ? 'viewrcipeModal' : undefined;
    return(
      <div className="dashboard">
        <div className="header">
          {addRecipeForm}
          {viewRecipe}
        </div>
        <div className="user-recipe">
          <h2>All Recipes</h2>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state =>({
  dashboard:state.dashboard,
  controls:state.controls,
  loggedIn: state.auth.currentUser !== null


})
export default connect(mapStateToProps)(PublicDash);

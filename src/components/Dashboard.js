import React from 'react';
import {connect} from 'react-redux';
import{Redirect} from 'react-router-dom'
//components and styles
import RecipeSpread from './RecipeSpread';
import './styles/dashboard.css'
import NewRecipeModal from './NewRecipeModal'
import ViewRecipeModal from './ViewRecipeModal'
import {handleNewRecipeModal} from '../actions/controls'
//actions
import {fetchRecipeData} from '../actions/dashboard'
class Dashboard extends React.Component{

  componentDidMount(){
      this.props.dispatch(fetchRecipeData());
  }

  render(){
    //LOGS OUT USER
    if(!this.props.loggedIn){
        return <Redirect to='/'/>
    }
    const addRecipeForm = this.props.controls.isCreatingRecipe ? <NewRecipeModal/> : undefined;
    const viewRecipe = this.props.controls.isViewingRecipe ? <ViewRecipeModal/> : undefined;
    return(
    <div className="dashboard-container">

      <div className="dashboard-controls">
        <button className="dashboard-newrecipe" onClick={() => this.props.dispatch(handleNewRecipeModal())}>New Recipe</button>
        {addRecipeForm}
        {viewRecipe}
      </div>
      <div className="dashboard-body">
        <div className="spread-container">

          <h2>My Recipes</h2>
          <RecipeSpread/>
        </div>
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
export default connect(mapStateToProps)(Dashboard);

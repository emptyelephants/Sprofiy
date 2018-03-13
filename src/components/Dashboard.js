import React from 'react';
import {connect} from 'react-redux';
//components and styles
import RecipeSpread from './RecipeSpread';
import DashboardControls from './DashboardControls'
import NewRecipeModal from './forms/NewRecipeModal.js'
import './styles/dashboard.css'
//actions
import {fetchRecipeData} from '../actions/recipes'

class Dashboard extends React.Component{
  componentDidMount(){
    console.log('Did Mount')
    this.props.dispatch(fetchRecipeData());
  }


  render(){
    console.log('render')
    const addRecipeForm = this.props.controls.isCreatingRecipe ? <NewRecipeModal/>:undefined;
    return(
      <div className="dashboard">
        <div className="header">
          <DashboardControls />
          {addRecipeForm}
          <h1>good morning</h1>
        </div>
        <div className="user-recipe">
          <h2>My Recipes</h2>
          <RecipeSpread recipeData={this.props.recipes.myRecipes}  />
        </div>
        <div className="follower-recipe">
          <h2>John Smith's Recipes</h2>
          {/* <RecipeSpread /> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  recipes:state.recipes,
  controls:state.controls
})
export default connect(mapStateToProps)(Dashboard);

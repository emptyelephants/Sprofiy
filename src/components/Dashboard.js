import React from 'react';
import {connect} from 'react-redux';
//components and styles
import RecipeSpread from './RecipeSpread';
import DashboardControls from './DashboardControls'
import NewRecipeModal from './NewRecipeModal.js'
import './styles/dashboard.css'
//actions
import {fetchRecipeData} from '../actions/recipes'
import {incrementPage,decrementPage} from '../actions/recipes'

class Dashboard extends React.Component{
  componentDidMount(){
    console.log('Did Mount',this.props)
    this.props.dispatch(fetchRecipeData());
  }
  //handle negative values, hide prev on start of recipes and vice versa for the next
  handlePagePrev(){
    console.log('prev page');

  }
  handlePageNext(){
    this.props.dispatch(incrementPage())
  }


  render(){
    const myRecipes = this.props.recipes.myRecipes.slice(this.props.recipes.myRecipesPagination,this.props.recipes.myRecipesPagination+3)

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
          <button onClick={() => this.props.dispatch(decrementPage())}>Prev</button>
          <button onClick={() =>  this.props.dispatch(incrementPage())}>Next</button>

          <RecipeSpread recipeData={myRecipes}  />
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

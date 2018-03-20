import React from 'react';
import {connect} from 'react-redux';
import{Redirect} from 'react-router-dom'

//components and styles
import RecipeSpread from './RecipeSpread';
import DashboardControls from './DashboardControls'
import NewRecipeModal from './NewRecipeModal.js'
import './styles/dashboard.css'
//actions
import {incrementPage, decrementPage, fetchRecipeData} from '../actions/dashboard'

class Dashboard extends React.Component{

  componentDidMount(){
    //fetch recipe data only if they're logged in
    if(this.props.loggedIn){
      console.log('fetch me')
      this.props.dispatch(fetchRecipeData());
    }
  }
  //handle negative values, hide prev on start of dashboard and vice versa for the next

  render(){
    // if(!this.props.loggedIn){
    //     return <Redirect to='/'/>
    // }
    console.log(this.props)
    const myRecipes = this.props.dashboard.myRecipes.slice(this.props.dashboard.myRecipesPagination,this.props.dashboard.myRecipesPagination+4)
    const prevButton = this.props.dashboard.myRecipesPagination === 0 ? undefined : <button onClick={() => this.props.dispatch(decrementPage())}>Prev</button> ;
    const nextButton = this.props.dashboard.myRecipesPagination+4 > this.props.dashboard.myRecipes.length-1 ? undefined: <button onClick={() =>  this.props.dispatch(incrementPage())}>Next</button>;


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
          {prevButton}
          {nextButton}
          <RecipeSpread recipeData={myRecipes} />
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
  dashboard:state.dashboard,
  controls:state.controls,
  loggedIn: state.auth.currentUser !== null


})
export default connect(mapStateToProps)(Dashboard);

import React from 'react';
import {connect} from 'react-redux';
import{Redirect} from 'react-router-dom'
//components and styles
import RecipeSpread from './RecipeSpread';
import './styles/dashboard.css'
import NewRecipeModal from './NewRecipeModal'
import ViewRecipeModal from './ViewRecipeModal'
//actions
import {incrementPage, decrementPage, fetchRecipeData} from '../actions/dashboard'
class Dashboard extends React.Component{

  componentDidMount(){
      this.props.dispatch(fetchRecipeData());
  }

  render(){
    //LOGS OUT USER
    // if(!this.props.loggedIn){
    //     return <Redirect to='/'/>
    // }
    console.log(this.props)


    const addRecipeForm = this.props.controls.isCreatingRecipe ? <NewRecipeModal/> : undefined;
    const viewRecipe = this.props.controls.isViewingRecipe ? <ViewRecipeModal/> : undefined;
    return(
      <div className="dashboard">
        <div className="header">
          {addRecipeForm}
          {viewRecipe}
          <h1>good morning</h1>
        </div>
        <div className="user-recipe">
          <h2>My Recipes</h2>
          <RecipeSpread/>
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

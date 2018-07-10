import React from 'react';
import './styles/recipeSpread.css'
import {connect} from 'react-redux'
import {handleViewRecipeModal} from '../actions/controls'
class RecipeSpread extends React.Component{
  render(){
    const recipeCards = this.props.recipeData.map((recipe,index) =>{
      return (
        <li className="recipe-card" key={recipe._id}>
          <div className="card-deco">
          </div>
          <h1 className="card-recipename">{recipe.recipeName}</h1>
          <h2 className="card-type">{recipe.espressoType}</h2>
          <span className="card-blurb">{recipe.blurb}</span>
          <div className="card-controls">
            <button
              className="card-view-recipe"
              onClick={
              () =>this.props.dispatch(handleViewRecipeModal(index))
            }>
              Brew
            </button>
          </div>
        </li>
      )
    })

    return (
      <div>
        <ul className="recipe-spread">
          {recipeCards}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  recipeData:state.dashboard.myRecipes,
})

export default connect(mapStateToProps)(RecipeSpread);

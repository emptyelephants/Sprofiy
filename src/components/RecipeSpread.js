import React from 'react';
import './styles/recipeSpread.css'
import {connect} from 'react-redux'
import {handleViewRecipeModal} from '../actions/controls'
class RecipeSpread extends React.Component{
  render(){
    console.log(this.props.recipeData,'bishbashbosh');
    const recipeCards = this.props.recipeData.map((recipe,index) =>{
      const recipeSteps = recipe.steps.map((_step,index) => {return(<li key={index}>{_step}</li>)})
      return (
        <li className="recipe-card" key={recipe._id}>
          <div className="card-deco">
          </div>
          <div className="card-content">
          <h2>{recipe.espressoType}</h2>
          <h1>{recipe.recipeName}</h1>
          <span>{recipe.blurb}</span>
            {/* <button className="brew-button">brew</button> */}
          </div>
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

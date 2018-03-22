import React from 'react'
import {connect} from 'react-redux';
import {handleViewRecipeModal} from '../actions/controls'

import './styles/newRecipeModal.css'

class ViewRecipeModal extends React.Component{

  handleRecipeModal(){
    return this.props.dispatch(handleViewRecipeModal())
  }
  render(){
    const recipe = this.props.recipeData[this.props.currentRecipe]
    const recipeSteps = recipe.steps.map((step) => {
      return (<li>{step}</li>)
    })
    return(
      <div className="modal-container">
          <div className="add-recipe-background" onClick={() =>this.handleRecipeModal() }>
          </div>
          <div className="add-recipe-modal">
            <div className="recipe-modal-header">

            </div>
            <div className="recipe-modal-body">
              <h2>

              </h2>
              <h3>{recipe.recipeName}</h3>
              <span className="recipe-blurb">{recipe.blurb}</span>
              <h4>Drink Type</h4>
                <span className="recipe-modal-name">{recipe.espressoType}</span>
              <h4>Steps</h4>
              <ul className="recipe-steps">
                {recipeSteps}
              </ul>
              <span className="recipe-modal-author">Made by:{recipe.authorName}</span>
            </div>
          </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  currentRecipe:state.controls.currentRecipe,
  recipeData:state.dashboard.myRecipes,
})
export default connect(mapStateToProps)(ViewRecipeModal)

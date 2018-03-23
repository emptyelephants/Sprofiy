import React from 'react'
import {connect} from 'react-redux';
import {handleViewRecipeModal} from '../actions/controls'
import {deleteOneRecipe,fetchRecipeData} from '../actions/dashboard'
import './styles/newRecipeModal.css'

class ViewRecipeModal extends React.Component{

  handleRecipeModal(){
    return this.props.dispatch(handleViewRecipeModal())
  }
  handleRecipeDelete(deleteId){
    this.handleRecipeModal()
    return this.props.dispatch(deleteOneRecipe(deleteId))
      .then(() => this.props.dispatch(fetchRecipeData()))
    //do a dispatch
  }
  /*onSubmit(values) {
    console.log(values);
  const {steps, recipeName,blurb,espressoType} = values;
  const newRecipe = {steps, recipeName, espressoType,blurb}
  this.props.dispatch(handleNewRecipeModal());
    return this.props.dispatch(sendNewRecipe(newRecipe))
      .then(() => this.props.dispatch(fetchRecipeData()))
  }*/


  render(){
    const recipe = this.props.recipeData[this.props.currentRecipe]
    const recipeSteps = recipe.steps.map((step,key) => {
      return (<li key={key}>{step}</li>)
    })
    return(
      <div className="modal-container">
          <div className="add-recipe-background" onClick={() => this.handleRecipeModal()}>
          </div>
          <div className="add-recipe-modal">
            {/* <div className="recipe-modal-header">
            </div> */}
            <div className="recipe-modal-body">

              <h3>{recipe.recipeName}</h3>
              <span className="recipe-blurb">{recipe.blurb}</span>
              <h4>Drink Type</h4>
                <span className="recipe-modal-name">{recipe.espressoType}</span>
              <h4>Steps</h4>
              <ul className="recipe-steps">
                {recipeSteps}
              </ul>
              <span className="recipe-modal-author">Made by: {recipe.authorName}</span>
              <div className="recipe-controls">
                <button className="recipe-back" onClick={() => this.handleRecipeModal()}>Back</button>
                <button className="recipe-share">Share</button>
                <button className="recipe-delete" onClick={() => this.handleRecipeDelete(recipe._id)}>Delete</button>
              </div>
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

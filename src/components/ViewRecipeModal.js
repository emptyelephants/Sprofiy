import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//actions
import {handleViewRecipeModal} from '../actions/controls'
import {deleteOneRecipe,fetchRecipeData} from '../actions/dashboard'
//components
import RecipeControls from './RecipeControls'
import RecipeContent from './RecipeContent'

import './styles/newRecipeModal.css'
class ViewRecipeModal extends React.Component{
  handleRecipeModal(){
    return this.props.dispatch(handleViewRecipeModal())
  }
  handleRecipeDelete(deleteId){
    this.handleRecipeModal()
    return this.props.dispatch(deleteOneRecipe(deleteId))
      .then(() => this.props.dispatch(fetchRecipeData()))

  }


  render(){
    const recipe = this.props.recipeData[this.props.currentRecipeIndex]
    return(
      <div className="modal-container">
        <div className="add-recipe-background" onClick={() => this.handleRecipeModal()}>
        </div>
        <div className="add-recipe-modal">
          <div className="recipe-modal-body">
            <RecipeContent currentRecipe={recipe} />
            <RecipeControls
              recipeId={recipe._id}
              handleDelete={(e) => this.handleRecipeDelete(e)}
              handleRecipeModal={() => this.handleRecipeModal()}
            />
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  recipeData:state.dashboard.myRecipes,
  currentRecipeIndex:state.controls.currentRecipe

})
export default connect(mapStateToProps)(ViewRecipeModal)

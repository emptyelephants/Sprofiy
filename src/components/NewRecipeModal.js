import React from 'react'
import {connect} from 'react-redux';
import {handleNewRecipeModal} from '../actions/controls'
import EspressoRecipeForm from './forms/EspressoRecipeForm'
import './styles/newRecipeModal.css'

class NewRecipeModal extends React.Component{
  handleRecipeModal(){
    return this.props.dispatch(handleNewRecipeModal())
  }
  render(){
    return(
      <div className="modal-container">
          <div className="add-recipe-background" onClick={() =>this.handleRecipeModal() }>
          </div>
          <div className="add-recipe-modal">
            <h2>New Recipe</h2>
            <EspressoRecipeForm />
          </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  controls:state.controls,
  recipeForm:state.recipeForm
})
export default connect(mapStateToProps)(NewRecipeModal)

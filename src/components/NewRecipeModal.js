import React from 'react'
import {connect} from 'react-redux';
import {handleNewRecipeModal} from '../actions/controls'
import EspressoRecipeForm from './forms/EspressoRecipeForm'
import './styles/addRecipe.css'

class NewRecipeModal extends React.Component{

  handleRecipeModal(){
    return this.props.dispatch(handleNewRecipeModal())
  }
  render(){
    console.log('from modal',this.props)
    return(
      <div>
          <div className="add-recipe-background" onClick={() =>this.handleRecipeModal() }>
          </div>
          <div className="add-recipe-modal">
            <EspressoRecipeForm />
            <div className ="modal-controls">
              <button onClick={() => this.handleRecipeModal()}>go back</button>
              <button>add step</button>
              <button onClick={() => console.log('submit')}>add recipe</button>
            </div>
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

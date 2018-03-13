import React from 'react'
import {Feild,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {handleNewRecipeForm} from '../../actions/controls'
import '../styles/addRecipe.css'
class NewRecipeModal extends React.Component{
  componentDidMount(){

  }
  handleRecipeModal(){
    return this.props.dispatch(handleNewRecipeForm())
  }
  render(){
    console.log('from modal',this.props)
    return(
      <div>
          <div className="add-recipe-background" onClick={() =>this.handleRecipeModal() }>
          </div>
          <div className="add-recipe-modal">
            <p>New Recipe</p>

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
  recipieForm:state.recipeForm
})
export default connect(mapStateToProps)(NewRecipeModal)

import React from 'react'
import {API_BASE_URL} from '../config';
import './styles/share.css'

export default class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedRecipe: undefined,
    };
  }
  componentDidMount() {
     fetch(`${API_BASE_URL}/recipes/${this.props.match.params.recipeId}`)
     .then(recipe => recipe.json())
     .then(recipe => {this.setState({sharedRecipe:recipe})})

     .catch(err => {return err});

  }
  render() {

    if(!this.state.sharedRecipe){
      return(<span className="not-found">Recipe not found</span>)
    }
    else{
        const recipe = this.state.sharedRecipe
        const steps = recipe.steps.map((step, index)=>{return (<li key="index">{step}</li>)})
        return(
        <div>
          <div className="share-shadow"></div>
          <div className="share-recipe-container">
            <h1 className="share-name">{recipe.recipeName}</h1>
              <span className="share-blurb">{recipe.blurb}</span>
            <h2>Drink Type</h2>
            <h3 className="share-type">{recipe.espressoType}</h3>
            <h2>Steps</h2>

            <ul className="share-steps">
              {steps}
            </ul>
            <span className="share-author">Made by {recipe.authorName}</span>
          </div>
        </div>
        )
    }

  }

}

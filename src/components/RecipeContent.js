import React from 'react'
import { Link } from 'react-router-dom'
import './styles/RecipeContent.css'
export default function RecipeContent(props){
  const recipe = props.currentRecipe;
  const recipeSteps = recipe.steps.map((step,key) => {
    return (<li key={key}>{step}</li>)
  });
  return(
  <div>
    <h3>{recipe.recipeName}</h3>
    <span className="recipe-blurb">{recipe.blurb}</span>
    <h4>Drink Type</h4>
    <span className="recipe-type">{recipe.espressoType}</span>
    <h4 className="recipe-steps-header">Steps</h4>
    <ul className="recipe-steps">
      {recipeSteps}
    </ul>
    <span className="recipe-modal-author">Made by: {recipe.authorName}</span>
  </div>
  )
}

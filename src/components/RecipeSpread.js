import React from 'react';
import './styles/recipeCard.css'
export default function RecipeSpread(props){
  console.log('from spread',props.currentUser)
  const recipeCards = props.recipeData.map((recipe) =>{
    const recipeSteps = recipe.steps.map((_step,index) => {return(<li key={index}>{_step}</li>)})
    return (
      <li className="recipe-card" key={recipe._id}>
        <h1>{recipe.recipeName}</h1>
        <ul>
          {recipeSteps}
        </ul>
        {/* <button className="brew-button">brew</button> */}
      </li>
    )
  })

  return (
    <div>
    <button>test</button>
    <ul className="recipe-spread">
      {recipeCards}
    </ul>
  </div>
  )
};

import React from 'react'
import { Link } from 'react-router-dom'
import './styles/RecipeControls.css';
export default function RecipeControls(props){
    return(
      <div className="recipe-controls">
        <button className="recipe-back" onClick={() => props.handleRecipeModal()}>Back</button>
        <button className="recipe-share">
          <Link target="_blank" to={`/share/${props.recipeId}`}>Share</Link>
        </button>
        <button className="recipe-delete" onClick={() => props.handleDelete(props.recipeId)}>Delete</button>
      </div>
    );
}

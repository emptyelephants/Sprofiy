import React from 'react';

export default function TagLineCard(props){
  return(
    <div className="tag-line-card">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

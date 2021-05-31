import React from 'react';

import './card.styles.css'

export const Card = (props) => (
  <div className="card-container">
    <h1>{props.usState.province}</h1>
    <h3>{props.usState.county}</h3>
  </div>
)
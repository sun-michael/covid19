import React from 'react';

import './card.styles.css'

export const Card = (props) => (
  <div className="card-container">
    <h2>{props.usState.province}</h2>
    <h3>{props.usState.county}</h3>
    <h4>confirmed: {props.usState.stats.confirmed}</h4>
    <h4>deaths: {props.usState.stats.deaths}</h4>
    <h4>last update: {props.usState.updatedAt}</h4>
  </div>
)
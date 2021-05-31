import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
  <div className="card-list">
    {console.log("index is ")}
    {console.log(props)}
    {props.usStates.map((s, index) => (
      < Card key={index} usState={s} />
    ))}
  </div>
)
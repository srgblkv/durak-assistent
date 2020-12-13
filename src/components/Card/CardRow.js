import React from 'react'
import {Card} from './Card'

import './CardRow.css'

export const CardRow = (props) => {
  const {quality, currentPlayer} = props
  const suit = ['♠', '♣', '♥', '♦']

  const cards = suit.map((s, i) => (
    <Card
      currentPlayer={currentPlayer}
      qulity={quality}
      suit={s}
      colorCard={i > 1 ? 'red' : 'black'}
      key={`${quality}${s}`}
    />
  ))

  return (
    <div className="row">
      <div className="row-quality">{quality}</div>
      <div className="row-cards">{cards}</div>
    </div>
  )
}
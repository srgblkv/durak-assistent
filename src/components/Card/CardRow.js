import React from 'react'
import { Card } from './Card'

import './CardRow.css'

export const CardRow = (props) => {
  const { quality } = props
  const suit = ['♠', '♣', '♥', '♦']

  const cards = suit.map((s, i) => (
    <Card quality={quality} suit={s} color={i > 1 ? 'red' : 'black'} key={`${quality}${s}`} />
  ))

  return (
    <div className="row">
      {cards}
    </div>
  )
}
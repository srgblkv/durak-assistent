import React from 'react'
import './Card.css'

export const Card = (props) => {
  const {suit, colorCard, currentPlayer: {color}} = props

  return (
    <div
      className={`card ${colorCard}`}
    >
      <div
        onClick={(e) => {
          const classList = e.target.classList.value || ''
          if (classList) {
            e.target.classList.remove(e.target.classList.value)
          }
          e.target.classList.add(color)
        }}
      >
        {suit}
      </div>
    </div>
  )
}
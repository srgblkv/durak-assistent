import React, { useState } from 'react'
import './Card.css'

export const Card = (props) => {
  const { quality, suit, color } = props

  const [state, setState] = useState(false)

  return (
    <div className={`card ${color} ${state ? 'passive' : ''}`} onClick={() => setState(!state)}>
      {quality}{suit}
    </div>
  )
}
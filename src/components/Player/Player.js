import React from "react"
import './Player.css'

export const Player = (props) => {
  const {setPlayer, currentPlayer, id, player: {name, color}} = props

  return (
    <div
      className={`player ${currentPlayer === id ? 'current' : ''}`}
      style={{background: `${color}`}}
      onClick={() => setPlayer(id)}
    >
      {name}
    </div>
  )
}
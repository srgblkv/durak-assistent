import React from "react"

import './PlayerRow.css'

import {Player} from "./Player"

export const PlayerRow = (props) => {
  const {players, currentPlayer, setPlayer} = props

  const viewPlayers = players.map((p, i) => (
    <Player
      currentPlayer={currentPlayer}
      id={i}
      player={p}
      key={i}
      setPlayer={setPlayer}
    />
  ))

  return (
    <>
      <span className="title">Игроки:</span>
      <div className="players">
        {viewPlayers}
      </div>
    </>
  )
}
import React, {useState} from 'react';
import './App.css';

import {CardRow} from './components/Card/CardRow'
import {PlayerRow} from "./components/Player/PlayerRow"

const quality = [
  '6', '7', '8', '9',
  '10', 'J', 'Q', 'K', 'A'
]

const players = [
  {name: 1, color: 'yellow'},
  {name: 2, color: 'purple'},
  {name: 3, color: 'green'},
  {name: 4, color: 'dodgerblue'},
  {name: 5, color: 'orangered'},
  {name: 6, color: 'mediumspringgreen'}
]

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(0)

  const row = quality.map((q, i) => (
    <CardRow
      currentPlayer={players[currentPlayer]}
      quality={q}
      key={`${i}${quality}`}
    />
  ))

  const setPlayer = (id) => {
    setCurrentPlayer(id)
  }

  return (
    <div className="App">
      {row}
      <PlayerRow
        players={players}
        currentPlayer={currentPlayer}
        setPlayer={setPlayer}
      />
      <div className="controls-state-app">
        <button>Забрал</button>
        <button>Отбился</button>
      </div>
    </div>
  )
}

export default App

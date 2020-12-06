import React from 'react';
import './App.css';

import { CardRow } from './components/Card/CardRow'
const quality = [
  '6', '7', '8', '9',
  '10', 'J', 'Q', 'K', 'A'
]

const row = quality.map((q, i) => (
  <CardRow quality={q} key={`${i}${quality}`} />
))

function App() {
  return (
    <div className="App">
      {row}
    </div>
  );
}

export default App;

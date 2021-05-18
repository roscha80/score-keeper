import Player from './Player'
import PlayerForm from './PlayerForm'
import Button from './Button'
import { useState } from 'react'
import './App.css'
import Header from './Header'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <Header />
      <div className="Section">
        <PlayerForm onSubmit={createPlayer} />
        {players.map((player, index) => (
          <Player
            onMinus={() => updateScore(index, -10)}
            onPlus={() => updateScore(index, +10)}
            key={player.name}
            name={player.name}
            score={player.score}
          />
        ))}
      </div>
      <div className="Section">
        <Button onClick={resetScores}>Reset scores</Button>
        <Button onClick={resetAll}>Reset all</Button>
      </div>
    </div>
  )
  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}

export default App

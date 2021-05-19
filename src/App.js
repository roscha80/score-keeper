import Player from './Player'
import PlayerForm from './PlayerForm'
import Button from './Button'
import { useState } from 'react'
import Header from './Header'
import styled from 'styled-components/macro'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <Wrapper>
      <Header />
      <section>
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
      </section>
      <section>
        <Button color="white" isActive onClick={resetScores}>
          Reset scores
        </Button>
        <Button onClick={resetAll}>Reset all</Button>
      </section>
    </Wrapper>
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

const Wrapper = styled.div`
  background-color: thistle;
  margin: 20px;
  border-color: #8a768a;

  section {
    background-color: thistle;
    margin: 20px;
    justify-content: center;
  }
`

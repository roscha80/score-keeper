import { useState } from 'react'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import styled from 'styled-components/macro'
import Nav from './components/Nav'
import HistoryPage from './pages/HistoryPage'
import { useEffect } from 'react'

export default function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [players, setPlayers] = useState([])
  const [gameName, setGameName] = useState('')
  const [history, setHistory] = useState(loadFromLocal('games') ?? [])
  useEffect(() => {
    saveToLocal('games', history)
  }, [history])

  return (
    <AppWrapper>
      {currentPageId === 'create' && (
        <CreatePage onNavigate={setCurrentPageId} onSubmit={handleSubmit} />
      )}
      {currentPageId === 'game' && (
        <GamePage
          onResetScores={resetScores}
          onEndGame={handleEndGame}
          onPlayerUpdate={updateScore}
          gameName={gameName}
          players={players}
        />
      )}
      {currentPageId === 'history' && (
        <HistoryPage games={history} onNavigate={setCurrentPageId} />
      )}
      {currentPageId !== 'game' && (
        <Nav
          currentPageId={currentPageId}
          onNavigate={setCurrentPageId}
          pages={[
            { title: 'Create', id: 'create' },
            { title: 'History', id: 'history' },
          ]}
        />
      )}
    </AppWrapper>
  )
  function handleEndGame() {
    setCurrentPageId('history')
    const date = new Date().toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    setHistory([{ players, gameName, date }, ...history])
  }
  function handleSubmit({ players, gameName }) {
    setPlayers(players)
    setGameName(gameName)
    setCurrentPageId('game')
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
  function loadFromLocal(key) {
    const jsonString = localStorage.getItem(key)
    return JSON.parse(jsonString)
  }
  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

const AppWrapper = styled.div`
  background-color: thistle;
  margin: 20px;
  border-color: #8a768a;

  section {
    background-color: thistle;
    margin: 20px;
    justify-content: center;
  }
`
